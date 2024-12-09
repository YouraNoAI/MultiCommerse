const SectHome = () => {
  return (
    <section id="home">
    <div className="home-content">
      <div className="home-content-left">
        <h1>
          <span>Muti</span> Commerce
        </h1>
        <p>
          Unlock your typing experience with the finest Mechanical Keyboards
          and premium device accessories available at <span>Multi</span>{" "}
          Commerce. Explore our collection today and elevate your
          productivity!
        </p>
        <a href="#product">
          <button id="shop-now-button">
            <h2>Shop Now</h2>{" "}
            <img src="/right-arrow.svg" alt="arrow" width={20} height={20} />
          </button>
        </a>
      </div>
      <div className="home-content-right">
        <img
          src="/keyboard-preview.png"
          alt="keyboard"
          width={500}
          height={500}
        />
      </div>
    </div>
    <div className="home-content-footer">
      <div className="home-content-footer-item">
        <img
          src="/truck-fast-solid.svg"
          alt="truck"
          width={20}
          height={20}
        />
        <h3>Free Shipping</h3>
        <p>For order over $100</p>
      </div>
      <div className="home-content-footer-item">
        <img
          src="/shield-halved-solid.svg"
          alt="shield"
          width={20}
          height={20}
        />
        <h3>Secure Payment</h3>
        <p>100% Secure Payment</p>
      </div>
      <div className="home-content-footer-item">
        <img
          src="/cart-shopping-solid.svg"
          alt="cart"
          width={20}
          height={20}
        />
        <h3>Easy to Order</h3>
        <p>Order from anywhere</p>
      </div>
      </div>
    </section>
  );
};

export default SectHome;
