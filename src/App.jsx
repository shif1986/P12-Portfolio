import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Portfolio from "../src/Components/pages/portfolio";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Contact from "./Components/pages/contact";
import Service from "./Components/pages/service";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/Portfolio/contact" element={<Contact />} />
        <Route path="/Portfolio/service" element={<Service />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App
