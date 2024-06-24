import React, { useState } from "react";
import {  Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Drawerr = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={showDrawer}>
      <RxHamburgerMenu size={20}/>
      </button>
      <Drawer closable={false} size={'large'} placement="left"   onClose={onClose} open={open}>
        <div className="w-full flex justify-end">
        <button onClick={onClose} className="closebutton relative top-[-10px] left-1" ><IoClose size={30}/></button>
        </div>
    
        <div className="flex flex-col justify-between items-center mt-10 gap-10 text-[40px]">
          <div>Home</div>
          <div>About</div>
          <div>Project</div>
          <div>Contact</div>
        </div>
      
      </Drawer>
    </>
  );
};
export default Drawerr;
