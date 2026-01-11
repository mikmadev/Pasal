import React from 'react'
import { useParams } from 'react-router-dom'
import { myProducts } from '../Comp/Data'
import { Link } from 'react-router-dom'

function Category() {
    const { catName } = useParams()

    // Filter garda dubai lai sano letter ma lagera check garne
    const filteredData = myProducts.filter(item =>
        item.category.toLowerCase() === catName.toLowerCase()
    )

    return (
        <div className="container mt-5">
            {/* Heading with primary color and border accent */}
            <h2 className="fw-bold mb-4 text-uppercase py-2"
                style={{ color: '#202C3C', borderBottom: '3px solid #202C3C', display: 'inline-block' }}>
                {catName}
            </h2>

            <div className="row mt-3">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                            <div className="card h-100 shadow-sm border-0 rounded-3 p-3 product-card">
                                <div className="text-center mb-3">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.title}
                                        style={{ height: '180px', objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="card-body px-0 text-center d-flex flex-column justify-content-between">
                                    <div>
                                        <h6 className="card-title text-truncate fw-bold" style={{ color: '#202C3C' }}>
                                            {item.title}
                                        </h6>
                                        <p className="fw-bold fs-5" style={{ color: '#202C3C' }}>
                                            Rs. {item.price}
                                        </p>
                                    </div>

                                    <div className="mt-2">
                                        {/* Primary Color Add to Cart Button */}
                                       

                                        {/* View Details Link with dynamic ID */}
                                        <Link to={`/product/${item.id}`}
                                            className="btn btn-outline-dark btn-sm w-100 fw-bold"
                                            style={{ borderColor: '#202C3C', color: '#202C3C' }}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <div className="alert alert-light shadow-sm border-0">
                            <h4 className="text-muted">No products found for "{catName}"</h4>
                            <Link to="/" className="btn btn-primary mt-3" style={{ backgroundColor: '#202C3C', border: 'none' }}>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category