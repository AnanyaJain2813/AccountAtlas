const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
  try {
    const { month, category, type } = req.query;
    const filter = { user: req.user.id };

    if (category) filter.category = category;
    if (type) filter.type = type;
    if (month) {
      const start = new Date(`${month}-01T00:00:00.000Z`);
      const end = new Date(start);
      end.setMonth(end.getMonth() + 1);
      filter.date = { $gte: start, $lt: end };
    }

    const transactions = await Transaction.find(filter).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch transactions' });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({ ...req.body, user: req.user.id });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create transaction' });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update transaction' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete transaction' });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    const income = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const categoryMap = {};

    transactions.filter((t) => t.type === 'expense').forEach((t) => {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    });

    res.json({
      income,
      expense,
      balance: income - expense,
      categoryBreakdown: Object.entries(categoryMap).map(([category, amount]) => ({ category, amount }))
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate summary' });
  }
};
