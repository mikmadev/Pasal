import React from 'react'
import { useParams } from 'react-router-dom'
import { myProducts } from '../Comp/Data' 
import { useStore } from '../Comp/ProductStore'; 

function Details() {
    const { addSaman } = useStore();
    
    const params = useParams(); 
    const id = params.id;

    const saman = myProducts.find(item => item.id == id);

    
    if (!saman) {
        return (
            <div className="container mt-5">
                <h2 className="text-center">Saman bhetiyena!</h2>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
               
                <div className="col-md-5">
                    <img 
                        src={saman.image} 
                        className="img-fluid border p-3" 
                        alt="photo"
                    />
                </div>

                
                <div className="col-md-7">
                    <h1 className="fw-bold">{saman.title}</h1>
                    <p className=" fw-bold">Price: Rs. {saman.price}</p>
                    
                    <hr />
                    
                    <h5>Details:</h5>
                    <p>{saman.description}</p>

                    <div className="mt-4">
                        <button 
                            onClick={() => addSaman(saman)} 
                            className="btn btn-warning me-2"
                        >
                            Add To Cart
                        </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Details