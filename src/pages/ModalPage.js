import React, { useEffect, useState } from 'react';
import ProductModal from '../components/ProductModal';
import { useParams } from 'react-router-dom'; 

function ModalPage() {
    const { id } = useParams();


  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);
  
  

  return (
    <div>
      {productDetails && <ProductModal product={productDetails} />}
    </div>
  );
}

export default ModalPage;



