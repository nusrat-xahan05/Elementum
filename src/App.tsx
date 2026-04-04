import CareerProgress from "./components/layout/CareerProgress"
import Footer from "./components/layout/Footer"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"
import Subscription from "./components/layout/Subscription"
import Testimonials from "./components/layout/Testimonials"

function App() {
  return (
    <div className="max-w-480 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <CareerProgress></CareerProgress>
      <Testimonials></Testimonials>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  )
}

export default App
