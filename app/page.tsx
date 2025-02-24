import Hero from "./Home/page"
import Features from "./features/page";
import Footer from "./components/Footer";
import ServicesPage from "./components/Plan_sub";
import ContactPages from "./components/Contact_sub";
import MissionValuesSection from "./components/aboutus_sub";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main>

<Navbar/>
  <Hero/>
  <Features/>
   <ServicesPage/>
   <MissionValuesSection/>
   <ContactPages/>
   <Footer/>
    </main>
   
  );
}
