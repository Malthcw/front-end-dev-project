import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import heroImg from '../Assets/Images/heroImg.png';
import Services from '../Components/Service';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero   heroImg={heroImg} title="We crush your competitors, goals, and sales records - without the B.S." btnName="Get free consultation"/>
      <Services/>
      <Footer />
    </>
  );
}
