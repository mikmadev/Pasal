import React from 'react'
import logo from '../assets/pasal_logoo.png';
import { FaShoppingCart } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';
import { useStore } from './ProductStore'; 




function Header() {
    
    const user = localStorage.getItem('user');
    const { myCart } = useStore();
    return (
        <>
            <header className="main-header">
               
                <section className='bg-white border-bottom'>
                    <div className="container-fluid px-lg-4">
                        <div className="row align-items-center g-1">

                            
                            <div className="col-6 col-lg-auto">
                                <Link to="/">
                                    <img style={{ width: "80px", height: "auto" }} src={logo} alt="Logo" />
                                </Link>
                            </div>

                            
                            <div className="col-6 col-lg-auto order-lg-3 ms-auto d-flex justify-content-end align-items-center gap-2 ">
                                <div className="lh-1 text-end effect">
                                    {user ? (
                                        // User login chha bhane usko naam dekhau
                                        <>
                                            <small className="text-secondary d-block" style={{ fontSize: '11px' }}>Hello!</small>
                                            <span className="fw-bold text-capitalize" style={{ fontSize: '13px' }}>{user}</span>
                                        </>
                                    ) : (
                                        // Login chhaina bhane Sign In link dekhau
                                        <Link to="/login" className="text-decoration-none text-dark">
                                            <small className="text-secondary d-block" style={{ fontSize: '11px' }}>Hello!</small>
                                            <span className="fw-bold" style={{ fontSize: '13px' }}>Sign In</span>
                                        </Link>
                                    )}
                                </div>
                                <Link to="/cart" className="d-flex align-items-center effect">
                                    <FaShoppingCart size={26} style={{ color: '#232f3e' }} />
                                    <span className="badge bg-danger rounded-pill ms-1">{myCart.length}</span>
                                    <span className="fw-bold ms-1" style={{ fontSize: '14px' }}>Cart</span>
                                </Link>
                            </div>

                            {/* Search Bar - Mobile ma full width (2nd line), Desktop ma bich ma (1st line) */}
                            <div className="col-12 col-lg mx-lg-3 order-lg-2">
                                <div className="input-group">
                                    <button className='btn btn-light dropdown-toggle border' type='button' data-bs-toggle="dropdown" style={{ backgroundColor: '#f3f3f3', fontSize: '14px' }}>
                                        All
                                    </button>
                                    <ul className="dropdown-menu shadow-sm">
                                        <Link to="/coming-soon">
                                            <li><a className="dropdown-item" href="#">Best Sellers</a></li>
                                        </Link>
                                        <Link to="/coming-soon">
                                            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                        </Link>
                                    </ul>
                                    <input type="text" className='form-control border' placeholder='Search products...' />

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: CATEGORY NAVBAR (DARK BLUE STRIP) --- */}
                <nav className="navbar navbar-expand-lg py-0 navbar-dark" style={{ backgroundColor: '#202c3cff' }}>
                    <div className="container-fluid " style={{ lineHeight: '1' }}>
                        {/* Mobile ma Hamburger button (left side ma) */}
                        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#subNavbarContent">
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Categories Menu - Mobile ma click garda center ma aaune */}
                        <div className="collapse navbar-collapse" id="subNavbarContent">
                            <ul className="navbar-nav mx-auto text-center w-100 justify-content-center">
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link active text-white audiowide-regular px-2" to="/">Home</Link>
                                    
                                    <span className="d-none d-lg-block mx-lg-3"
                                        style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', height: '20px' }}>
                                    </span>
                                </li>
                                {/* --- Electronics --- */}
                                {/* --- Electronics --- */}
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link active text-white audiowide-regular px-2" to="/category/electronics">Electronics</Link>
                                    
                                    <span className="d-none d-lg-block mx-lg-3"
                                        style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', height: '20px' }}>
                                    </span>
                                </li>

                                {/* --- Jewelery --- */}
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link active text-white audiowide-regular px-2" to="/category/men's clothing">Men's Clothing</Link>
                                    {/* Thado line: mx-lg-3 le left ra right dubai tira barabar gap dincha */}
                                    <span className="d-none d-lg-block mx-lg-3"
                                        style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', height: '20px' }}>
                                    </span>
                                </li>

                                {/* --- Men's Clothing --- */}
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link active text-white audiowide-regular px-2" to="/category/jewelery">Jewelery</Link>
                                    {/* Thado line: mx-lg-3 le left ra right dubai tira barabar gap dincha */}
                                    <span className="d-none d-lg-block mx-lg-3"
                                        style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', height: '20px' }}>
                                    </span>
                                </li>

                                {/* --- Women's Clothing --- */}
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link active text-white audiowide-regular px-2" to="/category/women's clothing">Women's Clothing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    )
}

export default Header
