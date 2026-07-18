import { useState } from 'react';

const initialState = {
  title: '',
  amount: '',
  type: 'expense',
  category: 'Food',
  date: '',
  note: ''
};

export default function TransactionForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, amount: Number(form.amount) });
    setForm(initialState);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="note" placeholder="Note" value={form.note} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
