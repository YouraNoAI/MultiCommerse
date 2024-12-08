import Image from "next/image";


const Home = () => {
  return (
    <div>
      <nav>
        <div className="nav-brand">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h2>
            <span>Multi</span> Commerce
          </h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button id="search-button"></button>
        </div>
        <div className="nav-fitur">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
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
            <button id="shop-now-button">
              <h2>Shop Now</h2>{" "}
              <Image src="/right-arrow.svg" alt="arrow" width={20} height={20} />
            </button>
          </div>
          <div className="home-content-right">
            <Image
              src="/keyboard-preview.png"
              alt="keyboard"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="home-content-footer">
          <div className="home-content-footer-item">
            <Image
              src="/truck-fast-solid.svg"
              alt="truck"
              width={20}
              height={20}
            />
            <h3>Free Shipping</h3>
            <p>For order over $100</p>
          </div>
          <div className="home-content-footer-item">
            <Image
              src="/shield-halved-solid.svg"
              alt="shield"
              width={20}
              height={20}
            />
            <h3>Secure Payment</h3>
            <p>100% Secure Payment</p>
          </div>
          <div className="home-content-footer-item">
            <Image
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
      <section id="about">
        <div className="about-content-header">
          <h1>Complete Features You Get</h1>
        </div>
        <div className="about-content">
          <div className="about-content-left">
            <ul>
              <li>
                <h2>Original Products</h2>
                <p>
                  This is one of the most exciting advantages we have. Order now
                  and you will know.
                </p>
              </li>
              <li>
                <h2>Stylish Design</h2>
                <p>
                  This is one of the most exciting advantages we have. Order now
                  and you will know.
                </p>
              </li>
              <li>
                <h2>Good Material</h2>
                <p>
                  This is one of the most exciting advantages we have. Order now
                  and you will know.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-content-center">
            <Image src="/ps5.png" alt="ps5" width={500} height={500} />
          </div>
          <div className="about-content-right">
            <div className="about-content-right-item">
              <ul>
                <li>
                  <h2>Waterproof</h2>
                  <p>
                    This is one of the most exciting advantages we have. Order
                    now and you will know.
                  </p>
                </li>
                <li>
                  <h2>Special Features</h2>
                  <p>
                    This is one of the most exciting advantages we have. Order
                    now and you will know..
                  </p>
                </li>
                <li>
                  <h2>Compartments</h2>
                  <p>
                    This is one of the most exciting advantages we have. Order
                    now and you will know.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="product">
        <div className="product-content-header">
          <h1>Product</h1>
        </div>
        <div className="product-name" style={{ marginBottom: "65px" }}>
          <h2>Mechanical Keyboard</h2>
        </div>
        <div className="product-content">
          <a href="/Product/[1]">
            <div className="product-box">
              <div className="product-content-image">
                <Image
                  src="/keyboard-preview.png"
                  alt="keyboard"
                  width={250}
                  height={250}
                />
              </div>
              <div className="product-content-item">
                <h2>Mechanical Keyboard</h2>
                <p>$100</p>
              </div>
            </div>
          </a>
          <a href="/Product/[2]">
            <div className="product-box">
              <div className="product-content-image">
                <Image
                  src="/keyboard-preview.png"
                  alt="keyboard"
                  width={250}
                  height={250}
                />
              </div>
              <div className="product-content-item">
                <h2>Mechanical Keyboard</h2>
                <p>$100</p>
              </div>
            </div>
          </a>
          <a href="/Product/[3]">
            <div className="product-box">
              <div className="product-content-image">
                <Image
                  src="/keyboard-preview.png"
                  alt="keyboard"
                  width={250}
                  height={250}
                />
              </div>
              <div className="product-content-item">
                <h2>Mechanical Keyboard</h2>
                <p>$100</p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section id="contact">
        <h1>Halaman belum sempat dibuat</h1>
      </section>
    </div>
  );
};

export default Home;
