import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/21Studio-logo-white.webp";
import scrollToTop from "../utils/scrollToTop";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle clicks on the current page link
  const handleLinkClick = (path, e) => {
    // If we're already on this path, scroll to top instead of doing nothing
    if (location.pathname === path) {
      e.preventDefault();
      scrollToTop();
    }
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

          <div className="text-white-300 font-nunito hidden justify-between gap-10 text-base font-normal lg:flex [&_*]:text-lg lg:[&_*]:text-lg">
            <Link to="/" onClick={(e) => handleLinkClick("/", e)}>
              Home
            </Link>
            <Link to="/about" onClick={(e) => handleLinkClick("/about", e)}>
              About us
            </Link>
            <Link
              to="/services"
              onClick={(e) => handleLinkClick("/services", e)}
            >
              Services
            </Link>
            <Link to="/gallery" onClick={(e) => handleLinkClick("/gallery", e)}>
              Gallery
            </Link>
            <Link to="/contact" onClick={(e) => handleLinkClick("/contact", e)}>
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <div className="primary-btn justify-content-end flex items-start">
              <Link to="#">Sign Up</Link>
            </div>

            <div className="lg:hidden">
              <button onClick={toggleMenu} className="cursor-pointer">
                <FontAwesomeIcon
                  icon={isOpen ? faTimes : faBars}
                  size="xl"
                  color="white"
                />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="text-white-200 bg-black-100 [&>a]:text-white-200 [&>a]:border-white-300 fixed z-50 mt-6 flex w-full flex-col items-center p-6 text-base font-medium shadow lg:hidden [&>a]:w-full [&>a]:border-b [&>a]:py-4">
            <Link
              to="/"
              onClick={(e) => {
                handleLinkClick("/", e);
                toggleMenu();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={(e) => {
                handleLinkClick("/about", e);
                toggleMenu();
              }}
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={(e) => {
                handleLinkClick("/services", e);
                toggleMenu();
              }}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              onClick={(e) => {
                handleLinkClick("/gallery", e);
                toggleMenu();
              }}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={(e) => {
                handleLinkClick("/contact", e);
                toggleMenu();
              }}
            >
              Contact us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
