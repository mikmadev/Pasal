import React from 'react';
import { useStore } from '../Comp/ProductStore'; // Naya hook import gareko
import { Link } from 'react-router-dom';

function MyCart() {
    const { myCart, removeSaman } = useStore();

    // Total price nikalne logic
    const totalAmount = myCart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="container py-5" style={{ minHeight: '80vh' }}>
            <h2 className="fw-bold mb-4">Mero Shopping Cart 🛒</h2>
            
            {myCart.length === 0 ? (
                <div className="text-center py-5 shadow-sm rounded bg-light">
                    <h4>Ayy bro, jhola khali chha ta!</h4>
                    <Link to="/" className="btn btn-dark mt-3">Saman Khojna Jau</Link>
                </div>
            ) : (
                <div className="row">
                    {/* Saman ko List (Left Side) */}
                    <div className="col-lg-8">
                        {myCart.map((item) => (
                            <div key={item.id} className="card mb-3 p-3 border-0 shadow-sm rounded-4">
                                <div className="row align-items-center">
                                    <div className="col-3 col-md-2">
                                        <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                    </div>
                                    <div className="col-6 col-md-7">
                                        <h6 className="fw-bold mb-1 text-truncate">{item.title}</h6>
                                        <p className="text-muted small mb-0">Qty: {item.qty} | Price: Rs.{item.price}</p>
                                    </div>
                                    <div className="col-3 col-md-3 text-end">
                                        <button 
                                            onClick={() => removeSaman(item.id)}
                                            className="btn btn-outline-danger btn-sm border-0"
                                        >
                                            Hataune
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Bill ko Summary (Right Side) */}
                    <div className="col-lg-4">
                        <div className="card p-4 shadow-sm border-0 bg-dark text-white rounded-4">
                            <h5 className="fw-bold mb-4">Total Hisab</h5>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Saman ko subtotal:</span>
                                <span>Rs. {totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span>Delivery Charge:</span>
                                <span className="text-success fw-bold">Free</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <h4 className="fw-bold">Total:</h4>
                                <h4 className="fw-bold text-warning">Rs. {totalAmount.toFixed(2)}</h4>
                            </div>
                            <button className="btn btn-warning w-100 fw-bold py-3 shadow-sm rounded-3">
                                CHECKOUT GARNE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyCart;