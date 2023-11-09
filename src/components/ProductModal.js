import React, { useState } from 'react';
import './ProductModal.css'; 

function ProductModal({ product, onClose, onAddToCart }) {
  const [modalQuantity, setModalQuantity] = useState(1);

  const increaseQuantity = () => {
    setModalQuantity(modalQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (modalQuantity > 1) {
      setModalQuantity(modalQuantity - 1);
    }
  };

  const totalPrice = (product.price * modalQuantity).toFixed(2);

  const handleAddToCart = () => {
    onAddToCart(product, modalQuantity);
    onClose();
    alert('Product added to cart!');
  };

  return (
    <div className={`modal fade show modal-with-gradient`} tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document" style={{ maxWidth: '500px', backgroundColor: 'radial-gradient(circle, orange, violet)' }}>
            <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.title}</h5>
          </div>
          <div className="modal-body">
            <iframe
              width="100%"
              height="200"
              src={product.videoUrl}
              title={product.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h2>{product.title}</h2>
            <p>{product.text}</p>
            <p>Price: ₱{product.price.toFixed(2)}</p>
            <div className="quantity-control">
              <button className="btn btn-sm btn-secondary" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity">{modalQuantity}</span>
              <button className="btn btn-sm btn-secondary" onClick={increaseQuantity}>
                +
              </button>
            </div>

            <p>Quantity: {modalQuantity}</p>
            <p>Total Price: ₱{totalPrice}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;









