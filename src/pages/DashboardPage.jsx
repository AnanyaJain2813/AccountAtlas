import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SummaryCards from '../components/SummaryCards';
import ExpenseChart from '../components/ExpenseChart';
import api from '../services/api';

export default function DashboardPage() {
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0, categoryBreakdown: [] });

  useEffect(() => {
    const fetchSummary = async () => {
      const { data } = await api.get('/transactions/summary');
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <Layout>
      <h1>Dashboard</h1>
      <SummaryCards summary={summary} />
      <ExpenseChart items={summary.categoryBreakdown} />
    </Layout>
  );
}
