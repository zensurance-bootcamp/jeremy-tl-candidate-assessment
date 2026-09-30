import React from 'react';
import OrderForm from './pages/OrderForm';

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 720, margin: '2rem auto' }}>
      <h1>Orders Client</h1>
      <OrderForm />
    </div>
  );
}
