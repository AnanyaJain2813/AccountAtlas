import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ items }) {
  const data = {
    labels: items.map((item) => item.category),
    datasets: [
      {
        label: 'Expenses',
        data: items.map((item) => item.amount),
        backgroundColor: ['#01696f', '#006494', '#a12c7b', '#d19900', '#437a22']
      }
    ]
  };

  return (
    <div className="card">
      <h3>Category Breakdown</h3>
      <Pie data={data} />
    </div>
  );
}
