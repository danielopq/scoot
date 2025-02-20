import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components/layout";
import { Home, About, Location, Careers } from "./components/pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
