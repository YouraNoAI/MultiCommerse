const Navbar =()=>{
    return(
        <nav>
        <div className="brand">
          <img src="/icon.png" alt="icon" />
          <h2>Multi Commerce</h2>
        </div>
        <div className="Nav-Menu">
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="http://localhost:3000">
            <i class="fa-brands fa-shopify"></i>
          </a>
          <a href="/Cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="/Login">
          <i class="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>
    )
}
export default Navbar