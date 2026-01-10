import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#202C3C', color: '#ffffff' }}>

            <div className="text-center p-5 rounded-4 shadow-lg border border-secondary"
                style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>

                {/* Modern Icon/Logo placeholder */}
                <div className="mb-4">
                    <i className="bi bi-rocket-takeoff display-1 text-warning"></i>
                </div>

                <h1 className="display-3 fw-bold mb-3 tracking-widest text-uppercase">Coming Soon!</h1>

                <p className="lead mb-5 text-secondary-emphasistext-white" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    We're working hard to bring you something amazing! Our store is currently under maintenance.
                    Stay tuned for a brand new shopping experience.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                    <Link to="/" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold">
                        Back to Home
                    </Link>

                </div>

                <div className="mt-5 pt-4 border-top border-secondary opacity-50">
                    <p className="small mb-0">© 2026 Pasal. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;