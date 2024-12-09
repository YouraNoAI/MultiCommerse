"use client"
import Nav from "./Components/Nav";
import SectHome from "./Components/sectHome";
import SectAbout from "./Components/sectAbout";
import SectProducts from "./Components/sectProducts";
import SectContact from "./Components/sectContact";

const Home = () => {


  document.title = 'Multi Commerce';
  return (
    <div>
      <Nav />
      <SectHome />
      <SectAbout />
      <SectProducts />
      <SectContact />
    </div>
  );
};

export default Home;
