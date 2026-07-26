import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import api from '../services/api';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const { data } = await api.get('/transactions');
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleCreate = async (payload) => {
    await api.post('/transactions', payload);
    fetchTransactions();
  };

  const handleDelete = async (id) => {
    await api.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  return (
    <Layout>
      <h1>Transactions</h1>
      <div className="transactions-grid">
        <TransactionForm onSubmit={handleCreate} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>
    </Layout>
  );
}
