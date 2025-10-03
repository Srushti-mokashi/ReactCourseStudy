import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import Admin from "./components/Admin/Admin";
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import SingleProduct from './components/Products/SingleProduct';
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/products/:id" element={<SingleProduct />} />
       <Route path="/articles" element={<Articles />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} />
      
      </Routes>

      </main>
    </div>
  )
}

export default App;
