import React, { useState, useEffect } from 'react';
import Configurations from '../config';

const NAI = () => {

    const handleSubmit = async (e: any) => {
        Configurations.handleSubmit(e);
    }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Configurations.getProduct();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div className="nai-page">
        <nav>
            <a href="#uploadProduct">Upload Product</a>
            <a href="#productList">Product List</a>
            <a href="#productSearch">Product Search</a>
            <a href="#productUpdate">Product Update</a>
            <a href="#productDelete">Product Delete</a>
        </nav>
        <div className="nai-page-content">
            <section id="uploadProduct" style={{padding: "150px"}}>
                <h1>Upload Product</h1>
                <form style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center"}} onSubmit={handleSubmit}> 
                    <input type="text" placeholder="Product Name" />
                    <input type="file" placeholder="Product Image" />
                    <input type="text" placeholder="Product Description" />
                    <input type="number" placeholder="Product Price" />
                    <select name="category" id="category">
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                    <input type="number" placeholder="Product Stock" />
                    <button type="submit">Upload</button>
                </form>
            </section>
            <section id="productList" style={{padding: "150px"}}>
                <h1>Product List</h1>
                {data.map((product: any) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </section>
            <section id="productSearch" style={{padding: "150px"}}>
                <h1>Product Search</h1>
            </section>
            <section id="productUpdate" style={{padding: "150px"}}>
                <h1>Product Update</h1>
            </section>
            <section id="productDelete" style={{padding: "150px"}}>
                <h1>Product Delete</h1>
            </section>
        </div>
    </div>
  );
};

export default NAI;
