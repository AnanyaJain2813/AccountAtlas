import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api, { setAuthToken } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (form) => {
    const { data } = await api.post('/auth/login', form);
    setAuthToken(data.token);
    login(data);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <AuthForm mode="login" onSubmit={handleLogin} />
      <p>New here? <Link to="/register">Create an account</Link></p>
    </div>
  );
}
