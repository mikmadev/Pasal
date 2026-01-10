import React from 'react'
import { useParams } from 'react-router-dom'
import { myProducts } from '../Comp/Data' // Path check gara hai bro

function Details() {
    // 1. URL bata 'id' variable nikalne
    const { id } = useParams()

    // 2. myProducts array bata tyo ID bhayeko product khojne
    // URL ko id string huncha, data ko id number
    // Tesaile parseInt use garnu parchha exact match ko lagi
    const product = myProducts.find(item => item.id === parseInt(id))

    // 3. Yedi product bhetiena bhane error message dekhaune
    if (!product) {
        return <div className="container mt-5 text-center"><h2>Product Not Found!</h2></div>
    }

    return (
        <div className="container my-5 py-5">
            <div className="row align-items-center">
                {/* Left side: Product Image */}
                <div className="col-md-6 text-center">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="img-fluid" 
                        style={{ maxHeight: '450px', objectFit: 'contain' }} 
                    />
                </div>

                {/* Right side: Product Info */}
                <div className="col-md-6">
                    <h5 className="text-uppercase text-muted">{product.category}</h5>
                    <h2 className="display-5 fw-bold">{product.title}</h2>
                    
                    <div className="d-flex align-items-center my-3">
                        <span className="badge bg-success me-2">{product.rating.rate} ★</span>
                        <span className="text-muted">({product.rating.count} Reviews)</span>
                    </div>

                    <h3 className="text-primary fw-bold my-4">Rs. {product.price}</h3>
                    
                    <p className="lead text-secondary" style={{ textAlign: 'justify' }}>
                        {product.description}
                    </p>

                    <div className="mt-4">
                        <button className="btn btn-dark btn-lg px-4 me-3">Add to Cart</button>
                        <button className="btn btn-outline-dark btn-lg px-4">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details