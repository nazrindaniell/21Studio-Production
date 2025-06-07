import Navbar from "./Navbar";
import Footer from "./Footer";
import useScrollToTop from "../utils/useScrollToTop";

function MainLayout({ children }) {
  // This hook will automatically scroll to the top when the route changes
  useScrollToTop();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
