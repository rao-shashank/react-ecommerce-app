import React from 'react';

import Header from './components/Layout/Header';
import CartProvider from '../src/contexts/CartProvider';
import AppRouting from './pages/AppRouting';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <AppRouting />
      </main>
    </CartProvider>
  );
}

export default App;


