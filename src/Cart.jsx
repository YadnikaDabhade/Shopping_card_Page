import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Shopping Cart</h5>
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} x {item.quantity}
                  <span>${item.price * item.quantity}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Total: <strong>${getTotalPrice()}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
