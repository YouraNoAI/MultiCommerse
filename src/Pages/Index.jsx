window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".footer a");
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 50;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

const Index = () => {
  return (
    <div className="index">
      <nav>
        <div className="brand">
          <img src="/icon.png" alt="icon" />
          <h2>Multi Commerce</h2>
        </div>
        <div className="inputBox">
          <input type="search" placeholder="Cari di MC..." />
        </div>
        <div className="Nav-Menu">
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/shop">
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
    </div>
  )
};
export default Index;
