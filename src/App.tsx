import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components/layout";
import { Home } from "./components/pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
