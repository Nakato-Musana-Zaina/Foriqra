import Hero from "./Home/page"
import Features from "./Features/page";
import Footer from "./components/Footer";
import ServicesPage from "./components/Plan_sub";
import ContactPages from "./Contact_sub/page";


export default function Home() {
  return (
    <main>


  <Hero/>
  <Features/>
   <ServicesPage/>
   <ContactPages/>
   <Footer/>
    </main>
   
  );
}
