

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Portfolio from "../src/Components/pages/portfolio";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Contact from "./Components/pages/contact";
import Service from "./Components/pages/service";

function App() {
  return (
    <Router  >
      <Header />
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
