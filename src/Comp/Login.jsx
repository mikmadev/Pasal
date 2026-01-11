import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (name.trim()) {
            // Memory ma user save garne
            localStorage.setItem('user', name);
            // Home page ma pathaune
            navigate('/');
            // Header refresh garna ko lagi
            window.location.reload(); 
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
                <h2 className="text-center fw-bold mb-4" style={{ color: '#202C3C' }}>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Your Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name to login"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 py-2 fw-bold" style={{ backgroundColor: '#202C3C' }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;