// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Logo from "./Logo";
// import MainNav from "./MainNav";
// import { HiMenuAlt3 } from "react-icons/hi";
// import Uploader from "../data/Uploader";

// const StyledSidebar = styled.aside`
// background-color: var(--color-grey-0);
// padding: 3.2rem 2.4rem;
// /* border-right: 1px solid var(--color-grey-100); */
// grid-row: 1 / -1;
// display: flex;
// flex-direction: column;
// gap: 3.2rem;
// transition: transform 0.3s ease-in-out;



// @media (max-width: 768px) {
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 250px;
//   transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
//   z-index: 1000;
// }
// `;


// const MenuButton = styled.button`
//   background: none;
//   border: none;
//   color: var(--color-grey-600);
//   font-size: 2.4rem;
//   cursor: pointer;
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//     position: fixed;
//     top: 2rem;
//     left: 2rem;
//     z-index: 1100;
//   }
// `;

// const BlueLine = styled.div`
//    position: fixed;
//   top: 0;
//   left: 26rem;
//   width: 1.5px; /* ضخامت خط */
//   height: 100vh; /* ارتفاع کل صفحه */
//   background-color: var(--color-grey-100); /* رنگ خط */
//   @media (max-width: 768px) {
//     display: none;
    
//   }
//   `;


// function Sidebar() {
  
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClickOutside = (e) => {
//     if (e.target.closest('.sidebar') === null && isOpen) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//     {/* <BlueLine className="blue-line"></BlueLine> */}
//       <MenuButton onClick={() => setIsOpen(!isOpen)}>
//         <HiMenuAlt3 />
//       </MenuButton>
//       <StyledSidebar className="sidebar" isOpen={isOpen}>
//         <Logo />
//         <MainNav />
//         <Uploader />
//       </StyledSidebar>
//     </>
//   );
// }

// export default Sidebar;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // آیکون ضربدر
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 56.6px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1000;
  }
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--color-grey-600);
  font-size: 2.4rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 1100;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 900;
`;

const BlueLine = styled.div`
  position: fixed;
  top: 0;
  left: 26rem;
  width: 1.5px;
  height: 100vh;
  background-color: var(--color-grey-100);

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (!e.target.closest(".sidebar") && !e.target.closest(".menu-button") && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <BlueLine />
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <MenuButton
        className="menu-button"
        onClick={toggleSidebar}
        whileTap={{ scale: 0.9 }} // انیمیشن کوچک‌شدن هنگام کلیک
      >
        {isOpen ? (
          <motion.div
            key="close" // آیکون ضربدر
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }} // انیمیشن چرخش
            transition={{ duration: 0.3 }}
          >
            <HiX />
          </motion.div>
        ) : (
          <motion.div
            key="menu" // آیکون منو
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }} // انیمیشن چرخش
            transition={{ duration: 0.3 }}
          >
            <HiMenuAlt3 />
          </motion.div>
        )}
      </MenuButton>
      <StyledSidebar className="sidebar" isOpen={isOpen}>
        <Logo />
        <MainNav />
        <Uploader />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
