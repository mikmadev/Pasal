import React from 'react'
import logo from '../assets/pasal_logoo.png';
import pm from '../assets/PM.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section style={{ backgroundColor: "#202c3cff" }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="row ">
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h6 className='text-white '>Get to Know Us</h6>

                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} href="">Careers</Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} href="">Blog</Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none',  color: 'White' }} >About Us</Link>
                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h6 className='text-white '>Make Money with Us</h6>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} className='mb-1'>
                                Sell products on Pasal
                            </Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} className='mb-1'>
                                Become an Affiliate
                            </Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} className='mb-1'>
                                Advertise Your Products
                            </Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} className='mb-1'>
                                Sell on Pasal Business
                            </Link>
                            <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'White' }} className='mb-1'>
                                Self-Publish with Us
                            </Link>
                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h6 className='text-white '>Pasal Payment Products</h6>
                            <Link
                                to="/coming-soon"
                                className='text-white'
                                style={{ textDecoration: 'none' }}
                            >
                                Shop with Points
                            </Link>

                            <Link
                                to="/coming-soon"
                                className='text-white'
                                style={{ textDecoration: 'none' }}
                            >
                                Reload Your Balance
                            </Link>
                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h6 className='text-white '>Let Us Help You</h6>
                            <Link
                                to="/coming-soon"
                                className='text-white'
                                style={{ textDecoration: 'none' }}
                            >
                                Your Account
                            </Link>

                            <Link
                                to="/coming-soon"
                                className='text-white'
                                style={{ textDecoration: 'none' }}
                            >
                                Help
                            </Link>

                            <Link
                                to="/coming-soon"
                                className='text-white'
                                style={{ textDecoration: 'none' }}
                            >
                                Returns & Replacements
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#202c3cff" }}>
                <div className="col-lg-12 text-center">
                    <div className="container">
                        <img style={{ width: "100px", height: "auto" }} src={logo} alt="" />
                        <h6 className='text-white '>Payment Methods</h6>
                        <img style={{ width: "200px", height: "auto" }} src={pm} alt="" />

                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer
