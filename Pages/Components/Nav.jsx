const Nav = () => {
  return (
    <nav>
      <div className="nav-brand">
        <img src="/logo.png" alt="logo" width={100} height={100} />
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
  );
};

export default Nav;
