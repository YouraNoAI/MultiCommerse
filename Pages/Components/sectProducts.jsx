import axios from "axios";
import { useEffect, useState } from "react";


const SectProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
        };

        fetchProducts();
    }, []);
  


  return (
    <section id="product">
      <div className="product-content-header">
        <h1>featured product</h1>
      </div>
      <div className="product-name">
        <h2>{products[0]?.category}</h2> 
      </div>
      <div className="product-content">
        <a href={`/buy/${products[0]?.id}`}>
          <div className="product-box">
            <div className="product-content-image">
              <img
                src={products[1]?.image}
                alt="keyboard"
                width={250}
                height={250}
              />
            </div>
            <div className="product-content-item">
              <div className="product-content-item-name">
                <h2>{products[1]?.title}</h2>
              </div>
              <div className="product-content-item-price">
                <h2>${products[1]?.price}</h2>
              </div>
            </div>
          </div>
        </a>
        <a href={`/buy/${products[1]?.id}`}>
          <div className="product-box">
            <div className="product-content-image">
              <img
                src={products[2]?.image}
                alt="keyboard"
                width={250}
                height={250}
              />
            </div>
            <div className="product-content-item">
              <div className="product-content-item-name">
                <h2>{products[2]?.title}</h2>
              </div>
              <div className="product-content-item-price">
                <h2>${products[2]?.price}</h2>
              </div>
            </div>
          </div>
        </a>
        <a href={`/buy/${products[2]?.id}`}>
          <div className="product-box">
            <div className="product-content-image">
              <img
                src={products[3]?.image}
                alt="keyboard"
                width={250}
                height={250}
              />
            </div>
            <div className="product-content-item">
              <div className="product-content-item-name">
                <h2>{products[3]?.title}</h2>
              </div>
              <div className="product-content-item-price">
                <h2>${products[3]?.price}</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectProducts;
