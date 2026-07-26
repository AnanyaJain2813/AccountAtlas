import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api, { setAuthToken } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (form) => {
    const { data } = await api.post('/auth/register', form);
    setAuthToken(data.token);
    login(data);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <AuthForm mode="register" onSubmit={handleRegister} />
      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  );
}
