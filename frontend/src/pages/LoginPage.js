// LoginPage: kullanıcı adı ve rolünün girilmesi
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './styles.css';

function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (name && role) {
            setUser({ name, role });
            navigate('/lobby');
        }
    };

    return (
        <div className="container">
            <h1>Giriş</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>İsim:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rol:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Rol Seçin</option>
                        <option value="admin">Admin</option>
                        <option value="member">Üye</option>
                        <option value="user">Kullanıcı</option>
                    </select>
                </div>
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
}

export default LoginPage;
