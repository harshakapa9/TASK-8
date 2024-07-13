import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import About from "./components/About";
import Package from "./components/Package";
import Feature from "./components/Feature";
import Mail from "./components/Mail";
import Cta from "./components/Cta";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Nav/>
      <Slider/>
      <About/>
      <Package/>
      <Feature/>
      <Mail/>
      <Cta/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
