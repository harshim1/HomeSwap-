import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };
  return (
    <header>
      <div className="main div h-28 w-screen flex justify-center md:justify-normal  gap-10  relative md:text-sm ">
        <div className="bg-black h-28 w-28 md:w-36 flex flex-wrap gap-2 justify-center items-center p-8 md:p-12  ">
          <div className="w-3 h-3 border-white border md:top-0 md:left-0 md:-translate-x-[50%] md:-translate-y-[50%]"></div>
          <div className="w-3 h-3 border-white border md:top-0 md:left-0 md:-translate-x-[50%] md:-translate-y-[50%]"></div>
          <div className="w-3 h-3 border-white border md:top-0 md:left-0 md:-translate-x-[50%] md:-translate-y-[50%]"></div>
          <div className="w-3 h-3 border-white border md:top-0 md:left-0 md:-translate-x-[50%] md:-translate-y-[50%]"></div>
        </div>

        <div className="logo px-2 w-36 flex items-center justify-center ">
          <img className="object-cover" src="/Homehop-logo.png" alt="logo-image" />
        </div>

        <div className="w-28 p-8 md:hidden flex items-center bg-black">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  stroke="white"
                  strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
            </svg>
          </button>
        </div>
        <nav className="main-nav hidden md:flex ml-28 h-28  items-center justify-center gap-20 text-black ">
          <NavLink to="/Home"    className=" no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            Home
          </NavLink>

          <NavLink to="/Home"    className="hidden md:flex no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            Explore City
          </NavLink>

          <NavLink to="/Home"    className="hidden md:flex no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            All Hotels
          </NavLink>

          <NavLink to="/Home"    className="hidden md:flex no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            About Us
          </NavLink>

          <NavLink to="/Home"    className="hidden md:flex no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            Contact Us
          </NavLink>

          <NavLink to="/Home"    className="hidden md:flex no-underline text-black hover:scale-105 focus:text-black visited:text-black active:text-black">
            FAQs
          </NavLink>
          
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="md:hidden flex flex-col items-center border-t border-gray-200 p-2  top-[100%] w-screen bg-gray-100 absolute z-50" 
            >
              <motion.div variants={itemVariants}>
                <NavLink to="/Home" className="no-underline text-black hover:scale-105 py-2">
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink to="/Explore" className="no-underline text-black hover:scale-105 py-2">
                  Explore City
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink to="/Hotels" className="no-underline text-black hover:scale-105 py-2">
                  All Hotels
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink to="/About" className="no-underline text-black hover:scale-105 py-2">
                  About Us
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink to="/Contact" className="no-underline text-black hover:scale-105 py-2">
                  Contact Us
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink to="/FAQs" className="no-underline text-black hover:scale-105 py-2">
                  FAQs
                </NavLink>
              </motion.div>
              <motion.div className="flex gap-4 w-full justify-center items-center py-2" variants={itemVariants}>
                <button className="border border-black h-12 p-2 w-24 rounded-xl">SIGN IN</button>
                <button className="text-white bg-black border border-black h-12 p-2 w-24 rounded-xl">SIGN UP</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className=" hidden auth ml-28 sm:flex gap-16  w-1/5 justify-center items-center pr-10 ">
            <button className="border border-black h-12 p-2 w-36 rounded-xl  md:text-sm font-bold ">SIGN IN</button>
            <button className="text-white bg-black border border-black h-12 p-2 w-36 rounded-xl  md:text-sm font-bold  ">SIGN UP</button>
        </div>
      </div>
    </header>
  );
}

export default SiteNav;





