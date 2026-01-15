import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { myProducts } from '../Comp/Data';
import { Link } from 'react-router-dom';

function Home() {
    let electronicsProducts = myProducts.filter(item => item.category === 'electronics')
    let menclothing = myProducts.filter(item => item.category === "men's clothing")
    let jewelery = myProducts.filter(item => item.category === "jewelery")
    let womensclothing = myProducts.filter(item => item.category === "women's clothing")
    return (
        <>
            <section >
                <div className="container ">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true} 
                        autoplay={{
                            delay: 2500, 
                            disableOnInteraction: false, 
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]} 
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='w-100' src="https://img.lazcdn.com/us/domino/fb22e4c3-c283-4dc3-90b6-25cc2137ead8_NP-1976-688.jpg_2200x2200q80.jpg_.avif" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-100' src="https://img.lazcdn.com/us/domino/c6aeb09c-a6ac-47b7-99cb-0782cbbcb43a_NP-1976-688.jpg_2200x2200q80.jpg_.avif" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-100' src="https://img.lazcdn.com/us/domino/503717d3-d784-4385-81b2-c92982a67958_NP-1976-688.jpg_2200x2200q80.jpg_.avif" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-100' src="https://img.lazcdn.com/us/domino/06eb90f4-3e67-411c-94d6-5a0f1b5562ce_NP-1976-688.jpg_2200x2200q80.jpg_.avif" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <h4 className="fw-bold mb-4" style={{ color: '#202C3C', borderLeft: '5px solid #202C3C', paddingLeft: '15px' }}>
                            Electronics
                        </h4>
                        <div className="row">
                            {electronicsProducts.slice(0, 4).map((item) => {
                                return ( 
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                                        <div className="card h-100 shadow-sm border-0 rounded-3 p-3">
                                            <div className="text-center mb-3">
                                                <img
                                                    src={item.image}
                                                    className="card-img-top"
                                                    alt={item.title}
                                                    style={{ height: '180px', objectFit: 'contain' }}
                                                />
                                            </div>
                                            <div className="card-body px-0 text-center">
                                                <h6 className="card-title text-truncate fw-bold" style={{ color: '#202C3C' }}>{item.title}</h6>
                                                <p className="fw-bold fs-5" style={{ color: '#202C3C' }}>Rs. {item.price}</p>

                                                

                                                <Link to={`/product/${item.id}`} className="btn btn-outline-dark btn-sm w-100 fw-bold">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <h4 className="fw-bold mb-4" style={{ color: '#202C3C', borderLeft: '5px solid #202C3C', paddingLeft: '15px' }}>
                            Men's Clothing
                        </h4>
                        <div className="row">
                            {menclothing.slice(0, 4).map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                                    <div className="card h-100 shadow-sm border-0 rounded-3 p-3 product-card">
                                        <div className="text-center mb-3" style={{ overflow: 'hidden' }}>
                                            <img
                                                src={item.image}
                                                className="card-img-top"
                                                alt={item.title}
                                                style={{ height: '180px', objectFit: 'contain', transition: '0.3s' }}
                                            />
                                        </div>
                                        <div className="card-body px-0 text-center d-flex flex-column justify-content-between">
                                            <div>
                                                <h6 className="card-title text-truncate fw-bold" style={{ color: '#202C3C' }}>{item.title}</h6>
                                                <p className="fw-bold fs-5" style={{ color: '#202C3C' }}>Rs. {item.price}</p>
                                            </div>

                                            <div className="mt-2">
                                               <Link to={`/product/${item.id}`}className="btn btn-outline-dark btn-sm w-100 fw-bold" style={{ borderColor: '#202C3C', color: '#202C3C' }}>
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4 className="fw-bold mb-4" style={{ color: '#202C3C', borderLeft: '5px solid #202C3C', paddingLeft: '15px' }}>
                            Jewelery
                        </h4>
                        <div className="row">
                            {jewelery.slice(0, 4).map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                                    <div className="card h-100 shadow-sm border-0 rounded-3 p-3 product-card">
                                        <div className="text-center mb-3" style={{ overflow: 'hidden' }}>
                                            <img
                                                src={item.image}
                                                className="card-img-top"
                                                alt={item.title}
                                                style={{ height: '180px', objectFit: 'contain', transition: '0.3s' }}
                                            />
                                        </div>
                                        <div className="card-body px-0 text-center d-flex flex-column justify-content-between">
                                            <div>
                                                <h6 className="card-title text-truncate fw-bold" style={{ color: '#202C3C' }}>{item.title}</h6>
                                                <p className="fw-bold fs-5" style={{ color: '#202C3C' }}>Rs. {item.price}</p>
                                            </div>

                                            <div className="mt-2">
                                               <Link
                                                    to={`/product/${item.id}`}
                                                    className="btn btn-outline-dark btn-sm w-100 fw-bold"
                                                    style={{ borderColor: '#202C3C', color: '#202C3C' }}
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4 className="fw-bold mb-4" style={{ color: '#202C3C', borderLeft: '5px solid #202C3C', paddingLeft: '15px' }}>
                            Women's Clothing
                        </h4>
                        <div className="row">
                            {womensclothing.slice(0, 4).map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                                    <div className="card h-100 shadow-sm border-0 rounded-3 p-3 product-card">
                                        <div className="text-center mb-3" style={{ overflow: 'hidden' }}>
                                            <img
                                                src={item.image}
                                                className="card-img-top"
                                                alt={item.title}
                                                style={{ height: '180px', objectFit: 'contain', transition: '0.3s' }}
                                            />
                                        </div>
                                        <div className="card-body px-0 text-center d-flex flex-column justify-content-between">
                                            <div>
                                                <h6 className="card-title text-truncate fw-bold" style={{ color: '#202C3C' }}>{item.title}</h6>
                                                <p className="fw-bold fs-5" style={{ color: '#202C3C' }}>Rs. {item.price}</p>
                                            </div>

                                            <div className="mt-2">
                                                <Link
                                                    to={`/product/${item.id}`}
                                                    className="btn btn-outline-dark btn-sm w-100 fw-bold"
                                                    style={{ borderColor: '#202C3C', color: '#202C3C' }}
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
