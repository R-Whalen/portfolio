import AnimatedBanner from "@/Components/AnimatedBanner";
import Footer from "@/Components/Footer";
import LandingArea from "@/Components/LandingArea";
import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return <main className='overflow-x-hidden h-full'>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="dark"
      bodyClassName="default-font-family"
    />
    <div className='relative'>
      <AnimatedBanner />
      {/* Nav Bar */}
      <NavBar openMenu={() => setOpen(true)} />
      <MobileNavBar open={open} closeMenu={() => setOpen(false)} />
      {/* Landing Area */}
      <LandingArea />
      {/* Content */}
      <section className='relative z-[30]'>
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  </main>
};

export default HomePage;
