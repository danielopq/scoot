import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components/layout";
import { Home, About, Location, Careers } from "./components/pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
