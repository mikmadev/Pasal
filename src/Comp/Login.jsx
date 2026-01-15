import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const [meroName, setMeroName] = useState('');
    const navigate = useNavigate();

    
    const meroLogin = (e) => {
        e.preventDefault();
        
       
        if (meroName === "") {
            alert("Please enter your name!");
        } else {
            
            localStorage.setItem('user', meroName);
             navigate('/');
            window.location.reload(); 
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow p-4 border-0 mt-5">
                        <h2 className="text-center mb-4">Login Form</h2>
                        
                        <form onSubmit={meroLogin}>
                            <div className="mb-3">
                                <label className="form-label">Tapaiko Naam:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Name..."
                                    value={meroName}
                                    onChange={(e) => setMeroName(e.target.value)}
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;