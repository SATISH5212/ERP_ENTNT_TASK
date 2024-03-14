
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Dashboard from './COMPONENTS/Dashboard';
import ProductsManagement from './COMPONENTS/ProductsManagement';
import OrdersManagement from './COMPONENTS/OrdersManagement';
import Footer from './COMPONENTS/Footer'; // Import the Footer component
import './App.css'

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  }; 

  return (
    <div className="container">
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};


const PrivateRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <h2>Enterprise Resource Planning</h2>
          <div className="navigation">
            {isLoggedIn ? (
              <>
                <Link to="/" className="navigation-link">Dashboard</Link>
                <Link to="/products" className="navigation-link">Products</Link>
                <Link to="/orders" className="navigation-link">Orders</Link>
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </>
            ) : (
              <Link to="/login" className="navigation-link"></Link>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} isLoggedIn={isLoggedIn} />} />
          <Route path="/products" element={<PrivateRoute element={<ProductsManagement />} isLoggedIn={isLoggedIn} />} />
          <Route path="/orders" element={<PrivateRoute element={<OrdersManagement />} isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
