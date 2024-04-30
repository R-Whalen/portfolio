import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return <div className='overflow-x-hidden'>
    <div>
      <NavBar openMenu={() => setOpen(true)} />
      <MobileNavBar open={open} closeMenu={() => setOpen(false)} />
    </div>
  </div>
};

export default HomePage;
