import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App