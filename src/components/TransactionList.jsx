export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="card">
      <h3>Transactions</h3>
      <div className="transaction-list">
        {transactions.map((item) => (
          <div className="transaction-item" key={item._id}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.category} • {new Date(item.date).toLocaleDateString()}</p>
            </div>
            <div className="transaction-actions">
              <span className={item.type === 'income' ? 'income' : 'expense'}>
                {item.type === 'income' ? '+' : '-'} ₹ {item.amount.toLocaleString('en-IN')}
              </span>
              <button onClick={() => onDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
