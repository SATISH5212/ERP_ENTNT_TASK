import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
   const totalProducts = 50;
  const totalOrders = 30;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-column">
          <div className="dashboard-actions">
            <div className="dashboard-actions-item">
              <strong>Total Products:</strong> {totalProducts}
            </div>
            <Link to="/products" className="dashboard-link">Manage Products</Link>
          </div>
        </div>
        <div className="dashboard-column">
          <div className="dashboard-actions">
            <div className="dashboard-actions-item">
              <strong>Total Orders:</strong> {totalOrders}
            </div>
            <Link to="/orders" className="dashboard-link">Manage Orders</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
