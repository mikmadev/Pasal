import React from 'react';
import { useStore } from '../Comp/ProductStore';
import { Link } from 'react-router-dom';

function MyCart() {
    const { myCart, removeSaman } = useStore();


    let subTotal = 0;
    myCart.forEach(saman => {
        subTotal = subTotal + (saman.price * saman.qty);
    });


    if (myCart.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h2>Mero Shopping Cart khali chha!</h2>
                <Link to="/" className="btn btn-primary mt-3">GO HOME</Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Mero Shopping Cart</h2>

            <div className="row">
                <div className="col-md-8">

                    {myCart.map((saman) => (
                        <div key={saman.id} className="card mb-3 p-3">
                            <div className="row align-items-center">
                                <div className="col-md-2">
                                    <img src={saman.image} alt="product" className="img-fluid" />
                                </div>
                                <div className="col-md-7">
                                    <h5>{saman.title}</h5>
                                    <p>Qty: {saman.qty} | Price: Rs.{saman.price}</p>
                                </div>
                                <div className="col-md-3 text-end">
                                    <button
                                        onClick={() => removeSaman(saman.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Hataune
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h5 className="mb-3">Total</h5>
                        <p className='fw-bold'>Subtotal: Rs. {subTotal}</p>
                        <p>Delivery: <span className="text-success fw-bold">Free</span></p>
                        <hr />
                        <h4>Total: Rs. {subTotal}</h4>
                        <button className="btn btn-warning w-100 mt-3 py-2">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCart;