import HomeBg from "../assets/home-background.webp";
import ServiceCard from "../components/ServiceCard";
import StudioRentalImg from "../assets/studio-rental.webp";
import SoundSystemImg from "../assets/sound-system.webp";
import LiveBandImg from "../assets/live-bands.webp";

function Home() {
  return (
    <>
      {/* Hero section */}
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
      {/* Service section */}
      <div className="bg-white-200 w-screen overflow-hidden">
        <section className="container mx-auto py-20">
          <div className="flex flex-col gap-12">
            {/* Heading section */}
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
            </div>{" "}
            {/* Carousel */}
            <div className="scrollbar-hide flex w-screen snap-x snap-mandatory gap-x-4 overflow-x-scroll scroll-smooth pr-[calc(100vw-100%)] lg:gap-x-4">
              <ServiceCard
                heading="Studio Rental"
                desc="Professionally treated acoustic spaces for recording, mixing, or rehearsals."
                image={StudioRentalImg}
                link="#"
              />
              <ServiceCard
                heading="Sound System Rental"
                desc="High-fidelity audio systems tailored for any crowd size. Perfect clarity. Zero compromise."
                image={SoundSystemImg}
                link="#"
              />
              <ServiceCard
                heading="Live Bands"
                desc="From jazz to funk to pop — our versatile bands set the tone and mood for your event."
                image={LiveBandImg}
                link="#"
              />
              <ServiceCard
                heading="Live Bands"
                desc="From jazz to funk to pop — our versatile bands set the tone and mood for your event."
                image={LiveBandImg}
                link="#"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
