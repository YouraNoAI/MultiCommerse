"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Buys = () => {

  const { id } = useParams();
  const [buys, setBuys] = useState([]);
  const [quantity, setQuantity] = useState(1); // Tambahkan state untuk mengatur kuantitas


  useEffect(() => {
      const fetchBuys = async () => {
      try {
          const response = await axios.get(`https://fakestoreapi.com/products/`);
          setBuys(response.data);
      } catch (error) {
          console.error("Error fetching products", error);
      }
      };

      console.log(buys)

      fetchBuys();
  }, []);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }; // Tambahkan fungsi untuk mengubah kuantitas


  const name = buys[`${id}`]?.title
  const price = buys[`${id}`]?.price
  const description = buys[`${id}`]?.description
  const image = buys[`${id}`]?.image
  const qty = buys[`${id}`]?.rating?.count
  const rating = buys[`${id}`]?.rating?.rate
  const category = buys[`${id}`]?.category


  return (
    <div className="buys-products">
      <div className="box-buys">
        <h1><a href="/">Home </a>/<a href="/#product">Buy /</a> {name}</h1>
        <section id="previewProducts">
          <div className="left-preview-products">
            <div
              className="img-preview-products"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="right-preview-products">
            <div className="name-preview-products">
              <h1>{name}</h1>
            </div>
            <div className="info-preview-products">
              <div className="star-preview-products">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <h2>{rating}</h2>
              </div>
              <div className="selerProduct">
                <h2>{category}</h2>
              </div>
            </div>
            <div className="price-preview-products">
              <h2>$. {price}</h2>
              <h2>Stock : {qty}</h2>
            </div>
            <div className="send-to-cart">
              <div className="qty-preview-products">
                <button type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                <input type="number" value={quantity} onChange={handleQuantityChange} />
                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <div className="send-to-cart-button">
              <button type="button">
                <i className="fa fa-shopping-cart"></i> Tambah ke Keranjang
              </button>
              <button type="button" onClick={() => window.location.href = `/Checkout/${id}`}>
                <i className="fa fa-bolt"></i> Beli Sekarang
              </button>
            </div>
          </div>
        </section>
        <section id="descriptionProducts">
          <div className="description-products-content">
            <div className="info-description-products">
              <table>
                <tbody>
                  <tr>
                    <td>Nama Produk</td>
                    <td>:</td>
                    <td>{name}</td>
                  </tr>
                </tbody>
              </table>
              <h1>Deskripsi</h1>
              <p>{description}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Buys;
