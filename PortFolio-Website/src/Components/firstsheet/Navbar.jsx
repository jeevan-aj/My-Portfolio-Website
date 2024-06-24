import React, { useEffect, useState } from "react";
import Drawerr from "./Drawer";

const Navbar = () => {
  const [active, Setactive] = useState("home");
  const navbardata = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "project" },
    { id: 4, name: "contact" },
  ];
  const scrolltosection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${scrolled ? "flex justify-center items-center transition-all duration-300":"mt-5 md:mt-0 mx-5 md:mx-10 lg:mx-[5rem] flex justify-between items-center "}   md:sticky top-5 z-[99999] navbar ${
          scrolled ? "bg-slate-100 bg-blur py-2 rounded-full max-w-[500px]  mx-auto transition-all duration-300" : "bg-white"}`}
        id="Navbar"
      >
        <div className={`${scrolled ? 'hidden' : 'text-black text-[16px] ld:text-[20px] flex items-center font-bold'}`}>Jeevan.dev</div>
      
        <div className={`${scrolled ?"flex justify-center gap-10 transition-all duration-300":"hidden md:flex justify-end gap-8 transition-all duration-300" } flex  pt-4 md:pb-3`}>
          {navbardata.map((item) => (
            <div
              className={`uppercase  cursor-pointer small mx-2 md:mx-0 font-bold text-black ${
                scrolled?" lg:text-[12px] transition-all duration-300 text-[12px]" : "lg:text-[14px] "
              }`}
              key={item.id}
              onClick={() => {
                scrolltosection(item.name);
                Setactive(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="block md:hidden">
        <Drawerr/>
      </div>
      </div>
     
     
    </>
  );
};

export default Navbar;
