export default function SummaryCards({ summary }) {
  const cards = [
    { label: 'Income', value: summary.income },
    { label: 'Expense', value: summary.expense },
    { label: 'Balance', value: summary.balance }
  ];

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <div className="card" key={card.label}>
          <p>{card.label}</p>
          <h3>₹ {card.value.toLocaleString('en-IN')}</h3>
        </div>
      ))}
    </div>
  );
}
