import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Components/pages/Portfolio";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Contact from "./Components/pages/contact";
import Service from "./Components/pages/service";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="#" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
