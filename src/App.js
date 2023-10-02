// App.js
import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "./index.css";

const App = () => {
  const initialProducts = [
    { id: 1, name: "Product 1", price: 10,img:"https://5.imimg.com/data5/KK/CR/MY-5458350/kids-school-bag.jpg" },
    { id: 2, name: "Product 2", price: 15,img:"https://3.imimg.com/data3/XT/QF/MY-3512983/kids-school-bag.jpg" },
    { id: 3, name: "Product 3", price: 20,img:"https://5.imimg.com/data5/OS/WR/MY-48692934/girls-college-bag.jpg" },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <div className="product-list">
        {initialProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="Card">
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;
