import Footer from "./components/layout/Footer"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"
import Subscription from "./components/layout/Subscription"

function App() {
  return (
    <div className="max-w-480 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  )
}

export default App
