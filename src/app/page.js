import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Projects from "./components/Project";
import Beliefs from "./components/Beliefs";
import BeliefCards from "./components/BeliefCards";
import Footer from "./components/Footer";

  import Amenities from "./components/Amenities";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats/>
      <Projects/>
      <Beliefs/>
      <BeliefCards/>
      <Amenities/>
      <Footer/>
    </>
  );
}