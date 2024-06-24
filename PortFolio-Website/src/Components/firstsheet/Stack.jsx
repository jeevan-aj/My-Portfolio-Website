import React, { useState } from "react";
import './index.css'
import htmlsvg from '../../Images/svg/html.6e7b1b463015c056aeb9a624c8dc2876.svg'
import csssvg from '../../Images/svg/css3.9cecabbf6ce67609c48bc4f280a11002.svg'
import jssvg from '../../Images/svg/javascript.svg'
import Reactsvg from '../../Images/svg/reactjs.svg'
import Tailwindsvg from '../../Images/svg/tailwind.79614a5f61617ba49a0891494521226b.svg'
import scss from '../../Images/svg/scss.svg'
import figma from '../../Images/svg/figma.svg'
import bootstrap from '../../Images/svg/bootstrap.svg'
import redux from '../../Images/svg/redux.svg'
import git from '../../Images/svg/git.svg'
import mongodb from '../../Images/svg/mongodb.png'
import node from '../../Images/svg/nodejs.svg'

const Stack = () => {
  const iconData = [
    {id:1, src: jssvg, title: "Java Script", description: "Dynamic" },
    {id:2, src: Reactsvg, title: "React", description: "Component-Based" },
    {id:3, src: htmlsvg, title: "HTML5", description: "Markup" },
    {id:4, src: csssvg, title: "CSS3", description: "Styling" },
    {id:5, src: Tailwindsvg, title: "Tailwind CSS", description: "Utility-First" },
    { id:6,src: scss, title: "SCSS", description: "Stylesheets" },
    { id:7,src: figma, title: "Figma", description: "Design" },
    {id:8, src: bootstrap, title: "Bootstrap", description: "Framework" },
    {id:9, src: redux, title: "Redux", description: "State Management" },
    {id:10, src: git, title: "Git", description: "Version Control" },
    {id:11, src: mongodb, title: "MongoDB", description: "NoSQL Database" },
    {id:12, src: node, title: "Node", description: "JavaScript Runtime" },
  ];

  const [iconname, setIconname] = useState({
    title: '',
    description: '' 
  });
  
  const [isTouchActive, setIsTouchActive] = useState(false);
  
  const handleTouchStart = () => {
    setIsTouchActive(true);
  }

  const handleTouchEnd = () => {
    // setIsTouchActive(false);
  }

  const handleclick = (title,description) =>{
    console.log("clicked",title)
    setIconname(prevState => ({
      ...prevState,
      title: title, 
      description: description
    }));
  }


  return (
    <div className=" pt-8 md:pt-32  md:overflow-x-hidden">
      <div className=" flex md:hidden justify-center items-center pb-2"> Tech Stack</div>
    <div className="flex  ">
      <div className="md:font-semibold  md:medium sm:small flex  ">
        <div className="hidden md:flex tech">
          
       <div className="pt-0 md:pt-2 pb-10  md:pb-24"> Tech Stack </div>
        </div><span className="md:mx-5 mx-1 mr-2 w-[10px] h-12 border-r md:border-r border-black hidden md:flex tech "></span>
        <div className="logos relative  ">
          
        <ul className="md:flex gap-2 items-center text-center align-middle justify-center md:gap-5 icon-list hidden">
  {iconData.map((icon, index) => (<React.Fragment  key={index+"stack"}>
 
    <li className="icon-item" style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="icon-wrapper relative">
      <div className=" background  bg-gray-400 bg-opacity-40 backdrop-blur-md md:p-4 rounded-lg"></div>
        <img
          className="h-10 w-10 icon"
          src={icon.src}
          title={icon.title}
          alt="skill-icon"
        />
       
        <div className="title">
          <div className="grid grid-cols-1 justify-center">
           <div className="name text-[.8rem]">{icon.title}</div>
          <div className="description text-[.6rem] font-extralight ">{icon.description}</div>
          </div>
        </div>
      </div>
    </li>
    </React.Fragment>
  ))}
</ul>
        <ul className="flex gap-2 items-center text-center align-middle justify-center md:gap-5 icon-list md:hidden">
  {iconData.map((icon, index) => (<React.Fragment  key={index}>
 
    <li className="icon-item" style={{ animationDelay: `${index * 0.3}s`  }} 
    >
      <div className="icon-wrapper relative" onClick={() => handleclick(icon.title, icon.description)}  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <img
          className="h-10 w-10 icon"
          src={icon.src}
          title={icon.title}
          alt="skill-icon"
        />
      </div>
    </li>
    </React.Fragment>
  ))}
</ul>
 {isTouchActive && <div className="grid justify-center items-center pt-4 ">
  <div className="flex justify-center items-center">
  <div className="">{iconname.title}</div>
  </div>
  <div className="flex justify-center items-center">
  <div className="small">{iconname.description}</div></div>
  </div>}

        </div>
      </div>
    </div>
    </div>
  );
};

export default Stack;
