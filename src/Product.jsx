import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="mydiv">
      <div className="product col-lg-2 col-md-4 col-sm-6 mb-4">
        <div className="card">
          <img src={product.img} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">$Price :-{product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
