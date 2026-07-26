import { useState } from 'react';

export default function AuthForm({ mode, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h1>{mode === 'login' ? 'Login' : 'Create account'}</h1>
      {mode === 'register' && (
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
      )}
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}
