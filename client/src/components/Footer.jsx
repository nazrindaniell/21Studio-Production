import { Link } from "react-router-dom";
import TwstLogo from "../assets/twst-logo-black.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="bg-white-200 py-10 lg:pt-20 lg:pb-10">
        <div className="container mx-auto">
          <div className="bg-purple rounded-2xl p-10 lg:p-20">
            <div className="flex flex-col justify-center gap-8 self-start">
              <div className="flex flex-col gap-2">
                <h2 className="font-outfit text-h2 text-white-100 leading-tight font-medium lg:max-w-2/3 lg:text-5xl">
                  Ready to create something unforgettable?
                </h2>
                <p className="font-nunito text-white-200 text-base lg:text-lg">
                  Tell us what you need, and we'll handle the rest. From setup
                  to soundcheck — we've got you.
                </p>
              </div>
              <div className="flex justify-start">
                <Link to="#" className="primary-btn">
                  Register now
                </Link>
              </div>
            </div>
          </div>
          {/* link section */}
          <div className="border-black-100 flex flex-col gap-10 border-b py-20 lg:flex-row lg:justify-between">
            {/* left column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-outfit text-h4 text-black-100 lg:text-h3 font-medium">
                Powered by passion. <br /> Driven by details.
              </h3>
              <img src={TwstLogo} alt="twst logo" className="w-64 opacity-10" />
            </div>
            {/* center column */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="font-outfit text-h4 text-black-100 lg:text-h3 font-medium">
                  Links
                </h3>
                <div className="[&>a]:text-black-100 [&>a]:font-nunito flex flex-col gap-2 [&>a]:text-base lg:[&>a]:text-lg">
                  <Link to="/">Home</Link>
                  <Link to="/about">About us</Link>
                  <Link to="#">Services</Link>
                  <Link to="#">Gallery</Link>
                  <Link to="#">Contact us</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-outfit text-h4 text-black-100 lg:text-h3 font-medium">
                  Social
                </h3>
                <div className="[&>p]:text-black-100 flex gap-3 [&>p]:text-base lg:[&>p]:text-lg">
                  <a href="#">
                    <div className="bg-white-400 relative h-12 w-12 rounded-full">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="xl"
                        className="text-black-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="bg-white-400 relative h-12 w-12 rounded-full">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size="xl"
                        className="text-black-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="bg-white-400 relative h-12 w-12 rounded-full">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="xl"
                        className="text-black-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* right column */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="font-outfit text-h4 text-black-100 lg:text-h3 font-medium">
                  Contact us
                </h3>
                <div className="[&>p]:text-black-100 [&>p]:font-nunito flex flex-col gap-2 [&>p]:text-base lg:[&>p]:text-lg">
                  <p>+012-3456789</p>
                  <p>21studioproduction@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-outfit text-h4 text-black-100 lg:text-h3 font-medium">
                  Newsletter
                </h3>
                <form action="">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-black-100 text-black-100 focus:border-black-200 font-nunito w-full rounded-xl border bg-transparent px-6 py-3 text-base focus:ring-1 focus:outline-none lg:text-lg"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
          {/* copyright section */}
          <p className="text-black-100 font-nunito mt-5 text-center text-base lg:text-lg">
            © {new Date().getFullYear()} 21Studio Production. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
