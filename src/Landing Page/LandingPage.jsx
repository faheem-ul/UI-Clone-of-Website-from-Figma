import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import TopSection from "./TopSection/TopSection";
import MediaLogos from "./MediaLogos";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <Navbar />
      <TopSection />
      <MediaLogos />
      <Footer />
    </>
  );
}

export default LandingPage;
