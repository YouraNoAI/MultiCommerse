import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../src/assets/logo.png";

const Checkout = () => {
  const { id } = useParams();

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
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
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

  const shipping = 0.5;
  const quantityBuy = products.price + shipping;

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
    document.querySelector(".paypal-button").classList.add("active");
    document.querySelector(".credit-card-button").classList.remove("active");
    document.querySelector(".debit-card-button").classList.remove("active");
  };

  return (
    <div className="checkout-products">
      <div className="checkout-products-header">
        <div className="checkout-products-header-left">
          <img src={logo} alt="logo" />
          <h1>Multi Commerce</h1>
        </div>
      </div>
      <div className="checkout-products-body">
        <div className="checkout-products-body-left">
          <div className="checkout-products-body-left-box">
            <h1
              style={{
                textAlign: "center",
                marginTop: "25px",
                fontSize: "42px",
                fontWeight: "900",
                fontFamily: "Crimson Pro",
              }}
            >
              Checkout
            </h1>
            <div className="checkout-products-body-left-box-shipping">
              <div className="shipping-method active">
                <h1>Delivery</h1>
              </div>
              <div className="shipping-method">
                <h1>Standard</h1>
              </div>
              <div className="shipping-method">
                <h1>Pickup</h1>
              </div>
            </div>
            <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="address-container">
                <div className="address">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="state">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="zip">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    placeholder="Zip"
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="paymentMethod">
                <div
                  className="payPal"
                  onClick={() => handlePaymentMethod("PayPal")}
                >
                  <h1 className="active">PayPal</h1>
                </div>
                <div
                  className="creditCard"
                  onClick={() => handlePaymentMethod("Credit Card")}
                >
                  <h1>Credit Card</h1>
                </div>
                <div
                  className="debitCard"
                  onClick={() => handlePaymentMethod("Debit Card")}
                >
                  <h1>Debit Card</h1>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="checkout-products-body-right">
          <h1>Review Your Order</h1>
          <div className="checkout-products-body-right-box">
            <div className="checkout-products-body-right-box-left">
              <img src={products.image} alt="product" />
            </div>
            <div className="checkout-products-body-right-box-right">
              <p>{products.title}</p>
            </div>
          </div>
          <div className="checkout-products-body-right-box-right-table">
            <table>
              <tr>
                <td>Quantity</td>
                <td>: {quantity}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>: {shipping}</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>: {quantityBuy}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>: {quantityBuy + shipping}</td>
              </tr>
            </table>
          </div>
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
