import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const Lab1: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'LFC', email: 'lfc@gmail.com', role: 'Admin' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Đăng ký thành công!');
    setForm({ name: '', email: '', password: '' });
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: '', email: '', role: '' });
    setShowModal(false);
  };

  return (
    <div>
      <header style={{ background: '#333', color: 'white', padding: '1rem', width: '100%' }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <nav>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
          <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Profile</a>
          <a href="#" style={{ color: 'white' }}>Logout</a>
        </nav>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ width: '200px', background: '#f4f4f4', padding: '1rem', minHeight: '100vh' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Dashboard</a></li>
            <li style={{ padding: '0.5rem 0' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Users</a></li>
            <li style={{ padding: '0.5rem 0' }}><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Settings</a></li>
          </ul>
        </aside>

        <main style={{ flex: 1, padding: '2rem' }}>
          {/* Bài 2: Form đăng ký */}
          <h2>Đăng ký</h2>
          <form onSubmit={handleRegister} style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} />
            </div>
            <button type="submit">Submit</button>
          </form>

          <hr style={{ margin: '3rem 0' }} />

          {/* Bài 3: Bảng user */}
          <h2>Danh sách User</h2>
          <button onClick={() => setShowModal(true)} style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>Add User</button>
          <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f0f0f0' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td style={{ padding: '0.5rem' }}>{u.name}</td>
                  <td style={{ padding: '0.5rem' }}>{u.email}</td>
                  <td style={{ padding: '0.5rem' }}>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      {/* Bài 4: Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px' }}>
            <button onClick={() => setShowModal(false)}>X</button>
            <h2>Add User</h2>
            <form onSubmit={handleAddUser}>
              <input type="text" placeholder="Name" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} required /><br/>
              <input type="email" placeholder="Email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} required /><br/>
              <input type="text" placeholder="Role" value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })} required /><br/>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lab1;
