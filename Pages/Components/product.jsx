import React, { useState, useEffect } from 'react';
import '../../css/product.css';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../config/_db/product.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product">
      {data.map(item => (
        <div className="product-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className='product-name'>{item.name}</div>
          <div className='product-price'>Rp. {item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
