const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getSummary
} = require('../controllers/transactionController');

const router = express.Router();
router.use(authMiddleware);
router.get('/', getTransactions);
router.get('/summary', getSummary);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
