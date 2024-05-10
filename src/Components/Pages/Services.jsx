// Product.jsx
import React, { useState, useEffect } from 'react';
import plane1 from '../../assets/plane1.jpg'; // Import image


const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data (you can replace this with your actual data fetching logic)
  useEffect(() => {
    // Mock product data
    const mockProducts = [
      { id: 1, name: 'Product 1', price: '$100', destination: 'Destination 1', imageUrl: plane1 }, // Remove curly braces
      { id: 2, name: 'Product 2', price: '$150', destination: 'Destination 2', imageUrl: plane1 },
      { id: 3, name: 'Product 3', price: '$200', destination: 'Destination 3', imageUrl: plane1 },
      { id: 4, name: 'Product 4', price: '$250', destination: 'Destination 4', imageUrl: plane1 },
   
    ];
    setProducts(mockProducts);
  }, []);

  return (
    


<div className="container our-services">
<div className="row">
    <div className="col-md-4">
         <div className="card" style={{width: '100%;',cursor:"pointer"}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '100%;'}}>
            <img src="" className="card-img-top" alt="nothing" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
   <div className="col-md-4">
         <div className="card" style={{width: '18rem;'}}>
            <img src={city2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   </div>
</div>
</div>
    
  );
};

export default Product;
