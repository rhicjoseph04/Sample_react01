// Card.js
import React, { useState } from 'react';
import ProductModal from './ProductModal';

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', props.title, 1); // Assuming quantity is always 1 in Card
  };

  return (
    <div className="card d-inline-block m-2" style={{ width: '300px' }}>
<iframe
  width="100%"
  height="200"
  src={props.videoUrl}
  title={props.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  autoPlay
  muted // Add this line for muting
></iframe>
<div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.text}</p>
  <p>Price: ₱{(props.price).toFixed(2)}</p>
  <button className="btn btn-warning mr-2" onClick={openModal}>
    View Details
  </button>
  <button className="btn btn-primary mr-2" onClick={handleAddToCart}>
    Add to Cart
  </button>
</div>

      {showModal && (
        <ProductModal
          product={{
            title: props.title,
            videoUrl: props.videoUrl, 
            text: props.text,
            price: props.price,
          }}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default Card;























  