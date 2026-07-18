import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <h2>Finance Tracker</h2>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
        <div className="sidebar-user">
          <p>{user?.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
