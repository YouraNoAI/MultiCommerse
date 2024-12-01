import Navbar from "./Components/Navbar";
import "../css/index.css";
import AccesoriesBanner from "../img/Accesories-Banner.png";
import DigitalBanner from "../img/Digital-Banner.png";
import ElectronicsBanner from "../img/Electronic-Banner.png";
import FashionBanner from "../img/Fashion-Banner.png";
import FastDeliveryBanner from "../img/FastDelivery-Banner.png";
import FurnitureBanner from "../img/Furniture-Banner.png";
import TopUpBanner from "../img/TopUp-Banner.png";
import { useEffect, useRef } from "react";

const Index = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (bannerRef.current) {
        const scrollWidth = bannerRef.current.scrollWidth;
        const clientWidth = bannerRef.current.clientWidth;
        const scrollLeft = bannerRef.current.scrollLeft;
        if (scrollWidth !== clientWidth && scrollWidth !== clientWidth + scrollLeft) {
          bannerRef.current.scrollBy({ left: 812, behavior: 'smooth' }); // Ganti 512 dengan lebar gambar jika berbeda
        } else {
          bannerRef.current.scrollBy({ left: 0, behavior: 'smooth' }); // Kembali ke awal jika sudah mencapai akhir
        }
      }
    }, 5000); // Setiap 1 detik
    return () => clearInterval(scrollInterval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div className="indexPage">
      <nav>
        <Navbar />
      </nav>
      <div className="content">
        <section id="Home">
          <div className="home">
            <div className="banner-content" ref={bannerRef}>
                <img src={AccesoriesBanner} alt="banner" />
                <img src={DigitalBanner} alt="banner" />
                <img src={ElectronicsBanner} alt="banner" />
                <img src={FashionBanner} alt="banner" />
                <img src={FastDeliveryBanner} alt="banner" />
                <img src={FurnitureBanner} alt="banner" />
                <img src={TopUpBanner} alt="banner" />
                <img src={AccesoriesBanner} alt="banner" />
            </div>
          </div>
        </section>
        <section id="Flash-Sale">
          <h1>Flash Sale</h1>
        </section>
        <section id="Contact">
          <h1>Contact</h1>
        </section>
        <section id="About">
          <h1>About</h1>
        </section>
      </div>
    </div>
  );
};

export default Index;
