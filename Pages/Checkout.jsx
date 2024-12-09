import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Checkout = () => {
  const img = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`/api/products`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(paymentMethod);
    alert(address);
    alert(city);
    alert(state);
    alert(zip);
    alert(name);
    alert(email);
    alert(phone);
  };

  const qty = quantity;


  return (
    <div className="checkout-products">
      <div className="checkout-products-content">
        <div className="preview-checkout-box">
          <img src={img} alt="product" />
          <div className="preview-checkout-box-content">
            <h1>Product Name</h1>
            <p>Product Price</p>
            <div className="button-qty">
              <button onClick={() => setQuantity(quantity - 1)}>
                {" "}
                <i className="fa fa-minus"></i>
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <h3>{qty}</h3>
              <button onClick={() => setQuantity(quantity + 1)}>
                {" "}
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <form className="form-checkout-box" onSubmit={handleSubmit}>
          <div className="address-checkout-box">
            <h1>Address</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="number"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="payment-checkout-box">
            <h1>Payment Method</h1>
            <div className="payment-method-checkout-box">
              <div
                className="paypal-button active"
                onClick={() => setPaymentMethod("paypal")}
              >
                <p>
                  <i className="fa fa-cc-paypal"></i> PayPal
                </p>
              </div>
              <div
                className="credit-card-button"
                onClick={() => setPaymentMethod("credit-card")}
              >
                <p>
                  <i className="fa fa-credit-card"></i> Credit Card
                </p>
              </div>
              <div
                className="debit-card-button"
                onClick={() => setPaymentMethod("debit-card")}
              >
                <p>
                  <i className="fa fa-credit-card"></i> Debit Card
                </p>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
