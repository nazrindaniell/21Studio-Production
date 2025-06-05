import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/21Studio-logo-white.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="absolute left-1/2 z-40 w-full -translate-x-1/2 transform bg-transparent py-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link exact="true" to="/">
            <img
              src={logo}
              alt="21Studio logo"
              className="h-full w-12 object-center"
            />
          </Link>

          <div className="text-white-300 font-nunito hidden justify-between gap-10 font-normal lg:flex [&_*]:text-lg">
            <Link to="#">Home</Link>
            <Link to="#">About us</Link>
            <Link to="#">Services</Link>
            <Link to="#">Gallery</Link>
            <Link to="#">Contact us</Link>
          </div>
          <div className="primary-btn hidden lg:block">
            <Link to="#" className="text-lg">
              Sign Up
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                size="lg"
                color="white"
              />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed z-50 mt-4 flex w-full flex-col items-center gap-4 bg-white p-4 shadow lg:hidden">
            <Link to="#" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="#" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="#" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="#" onClick={toggleMenu}>
              Contact us
            </Link>
            <Link to="#" className="primary-btn" onClick={toggleMenu}>
              Sign up
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
