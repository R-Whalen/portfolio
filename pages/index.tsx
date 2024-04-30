import Hero from "@/Components/Hero";
import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return <div className='overflow-x-hidden'>
    <div>
      {/* Nav Bar */}
      <NavBar openMenu={() => setOpen(true)} />
      <MobileNavBar open={open} closeMenu={() => setOpen(false)} />
      {/* Hero */}
      <Hero />
    </div>
  </div>
};

export default HomePage;
