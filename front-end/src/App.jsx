import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Login,
  Register,
  CustomerProducts,
  CustomerCheckout,
  CustomerOrders,
  CustomerOrdersDetails,
  SellerOrders,
  SellerOrdersDetails,
  AdminManage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route index element={ <Navigate to="/login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="customer/products" element={ <CustomerProducts /> } />
      <Route path="customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="customer/orders" element={ <CustomerOrders /> } />
      <Route path="customer/orders/:id" element={ <CustomerOrdersDetails /> } />
      <Route path="seller/orders" element={ <SellerOrders /> } />
      <Route path="seller/orders/:id" element={ <SellerOrdersDetails /> } />
      <Route path="admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}

export default App;
