import React, { useState } from 'react';

const OrdersManagement = () => {
 
  const initialOrders = [
    { id: 1, customerName: 'Customer A', orderDate: '2022-03-10', status: 'Processing' },
    { id: 2, customerName: 'Customer B', orderDate: '2022-03-11', status: 'Shipped' },
    
  ];

  const [orders, setOrders] = useState(initialOrders);

  const handleViewOrderDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      alert(`Order Details:\nID: ${order.id}\nCustomer: ${order.customerName}\nOrder Date: ${order.orderDate}\nStatus: ${order.status}`);
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="PM">
      <h2>Orders Management</h2>
      <ul className="PM2">
        {orders.map(order => (
          <li key={order.id} className="product">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Order Date:</strong> {order.orderDate}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <div className="actions">
              <button onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
              <button onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}>Update Status</button>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersManagement;