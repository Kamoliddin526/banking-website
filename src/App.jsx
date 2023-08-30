import React from "react";
import ".//styles/App.scss";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Partner from "./pages/Partner/Partner";
import Glance from "./pages/Glance/Glance";
import Services from "./pages/Services/Service";
import Results from "./pages/Results/Results";
import Newsletter from "./pages/Newsletter/Newsletter";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";

const App = () => {
  return <div className="main__container">
    <Navbar/>
    <Home/>
    <Customer/>
    <Partner/>
    <Glance/>
    <Services/>
    <Results/>
    <Newsletter/>
    <Footer/>
  </div>;
};

export default App;
