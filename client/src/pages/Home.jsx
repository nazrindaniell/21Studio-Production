import HomeBg from "../assets/home-background.webp";
import ServiceCarousel from "../components/ServiceCarousel";

/**
 * Home page component for 21Studio Production website
 * Contains hero section and service section
 */
function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}

/**
 * Hero section with background image and call-to-action buttons
 */
function HeroSection() {
  return (
    <div className="relative">
      <img
        src={HomeBg}
        alt="Home background"
        className="h-svh w-full object-cover object-center"
      />
      <section className="absolute top-1/2 left-1/2 z-30 container mx-auto flex -translate-1/2 transform">
        <div className="flex w-full items-start justify-center lg:w-1/2">
          <div className="flex flex-col items-start justify-center gap-10 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="font-outfit text-white-200 text-h1 font-medium lg:text-7xl xl:text-8xl">
                Where Sound Meets Story
              </h1>
              <p className="font-nunito text-white-300 text-base font-normal lg:text-lg">
                Studio spaces, sound systems, live bands, and hosting —
                everything you need to create unforgettable experiences.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-self-auto lg:flex-row">
              <a href="#" className="primary-btn">
                Request a quote
              </a>
              <a href="#" className="secondary-btn">
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Services section with heading and ServiceCarousel component
 */
function ServicesSection() {
  return (
    <div className="bg-white-200 relative">
      <section className="py-20">
        <div className="container mx-auto mb-12">
          {/* Heading section - stays within container */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-h2 font-outfit text-black-100 text-center font-medium lg:text-5xl">
              Your Vision, Our Expertise
            </h2>
            <p className="font-monito text-black-100 w-full text-center text-base font-medium lg:w-[80%] lg:text-lg">
              At 21Studio Production, we offer more than just equipment — we
              deliver unforgettable experiences. Whether it's corporate gig,
              wedding, live show, or podcast session, we've got the talent,
              tech, and tools to make it a hit.
            </p>
          </div>
        </div>

        {/* Carousel section - can overflow its container */}
        <ServiceCarousel />
      </section>
    </div>
  );
}

export default Home;
