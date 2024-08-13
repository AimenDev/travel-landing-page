import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Offer from "./components/offer";
import Tours from "./components/Tours";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <DownloadApp />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
