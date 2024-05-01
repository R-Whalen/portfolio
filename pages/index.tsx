import AnimatedBanner from "@/Components/AnimatedBanner";
import Footer from "@/Components/Footer";
import LandingArea from "@/Components/LandingArea";
import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "@/Components/About";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

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
      // bodyClassName="default-font-family"
      toastStyle={{ backgroundColor: '#02050a', fontFamily: 'Roboto, Sans-Serif, Helvetica' }}
    />
    <div className='relative'>
      {/* Nav Bar */}
      <NavBar openMenu={() => setOpen(true)} />
      <MobileNavBar open={open} closeMenu={() => setOpen(false)} />
      {/* Landing Area */}
      <LandingArea />
      {/* Content */}
      <section className='relative z-[30]'>
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        <Footer />
      </section>
      {/* Footer */}
    </div>
  </main>
};

export default HomePage;
