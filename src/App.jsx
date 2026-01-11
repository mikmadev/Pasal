import React from 'react'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import Home from './Pages/Home'
import Category from './Pages/Category'
import { Route, Routes } from 'react-router-dom'
import Details from './Comp/Details'
import ComingSoon from './Comp/ComingSoon'
import Login from './Comp/Login'
import { ProductProvider } from './Comp/ProductStore'
import MyCart from './Pages/MyCart';


function App() {
  return (
    <>
   <ProductProvider>
      <Header />
      <Routes>
        {/* Jaba URL '/' matra huncha, Home matra dekhaucha */}
        <Route path="/" element={<Home />} />
<Route path="/cart" element={<MyCart />} />
        {/* Jaba URL '/category' huncha, Category matra dekhaucha (Home gayeb huncha) */}
        <Route path="/category/:catName" element={<Category />} />
        // App.jsx ma yo thapa
        <Route path="/product/:id" element={<Details />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </ProductProvider>
    </>
  )
}

export default App
