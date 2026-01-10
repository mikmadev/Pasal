// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (username.trim()) {
//             // Memory ma user save garne
//             localStorage.setItem('user', username);
//             alert("Login Successful!");
            
//             // Direct home ma pathaune ani page refresh garne jasle header update hos
//             window.location.href = "/"; 
//         }
//     };

//     return (
//         <div className="container py-5 d-flex justify-content-center">
//             <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
//                 <h2 className="text-center fw-bold mb-4" style={{ color: '#202C3C' }}>Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-3">
//                         <label className="form-label fw-bold">Username</label>
//                         <input 
//                             type="text" 
//                             className="form-control" 
//                             placeholder="Enter your name"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="form-label fw-bold">Password</label>
//                         <input type="password" className="form-control" placeholder="••••••••" required />
//                     </div>
//                     <button type="submit" className="btn btn-lg w-100 text-white fw-bold" style={{ backgroundColor: '#202C3C' }}>
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;