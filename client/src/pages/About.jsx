import { Link } from "react-router-dom";
import ServicePillars from "../components/ServicePillars";
import TeamProfile from "../components/TeamProfile";
import BannerImg from "../assets/banner-promote.webp";

function About() {
  return (
    <>
      <HeroSection />
      <CompanyBackground />
      <TeamMembers />
      <BannerPromote />
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative">
      <div className="bg-black-100">
        <section className="relative container mx-auto flex items-center justify-center pt-30 lg:h-svh lg:py-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-h1 text-white-200 font-outfit text-center font-medium lg:text-7xl">
                  More Than a Studio <br className="hidden lg:inline" /> We're a
                  movement
                </h1>
                <p className="font-nunito text-white-300 text-center text-base lg:w-1/2 lg:text-lg">
                  We don't just provide equipment — we create experience.
                  21Studio Production is where vision meets execution
                </p>
              </div>
              <div className="flex gap-4 self-center">
                <Link to="#" className="primary-btn">
                  Meet the team
                </Link>
                <Link to="#" className="secondary-btn">
                  Our services
                </Link>
              </div>
            </div>
            {/* ServicePillars section*/}
            <div className="mx-auto grid grid-cols-1 gap-6 lg:w-4/5 lg:grid-cols-3 lg:place-items-center">
              <ServicePillars />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CompanyBackground() {
  return (
    <div className="bg-black-100">
      <div className="py-20 lg:pt-0 lg:pb-20">
        <section className="container mx-auto">
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h2 className="border-white-200 lg:afer:content-[''] text-h2 font-outfit text-white-200 relative text-left font-medium uppercase lg:text-5xl lg:after:absolute lg:after:bottom-[-1rem] lg:after:left-0 lg:after:w-[20%] lg:after:border-b">
                  Our Story
                </h2>
              </div>
              <div className="[&>p]:font-nunito [&>p]:text-white-300 flex flex-col gap-4 [&>p]:text-base lg:[&>p]:text-lg">
                <p>
                  At 21Studio Production, our journey began with a shared love
                  for music, creativity, and the power of live experiences. What
                  started as a humble initiative to support local talents and
                  events has evolved into a full-service production company —
                  offering professional studio rentals, high-quality sound
                  systems, dynamic live bands, and emcee hosting for a wide
                  range of events.
                </p>
                <p>
                  We believe that every performance, recording, or gathering is
                  more than just a service — it’s a moment to connect, inspire,
                  and leave a lasting impression. That belief drives us to
                  approach every project with energy, precision, and heart.
                </p>
                <p>
                  We’ve had the privilege of working with clients from all walks
                  of life — artists, event organizers, brands, and individuals —
                  each with their own story, vision, and sound. Our job is to
                  amplify that vision and help bring it to life with clarity,
                  professionalism, and creative flair.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h2 className="border-white-200 lg:afer:content-[''] text-h2 font-outfit text-white-200 relative text-left font-medium uppercase lg:text-5xl lg:after:absolute lg:after:bottom-[-1rem] lg:after:left-0 lg:after:w-[20%] lg:after:border-b">
                  Our Mission
                </h2>
              </div>
              <p className="font-nunito text-white-300 text-base lg:text-lg">
                To empower creators, performers, and event organizers by
                delivering seamless, high-quality production services that
                transform ideas into impactful experiences. We are committed to
                being a reliable creative partner — providing the tools, space,
                and expertise needed to make every moment sound right and feel
                unforgettable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamMembers() {
  return (
    <div className="bg-black-100">
      <div className="pb-20 lg:pt-20 lg:pb-40">
        <section className="container mx-auto">
          <h2 className="text-h2 font-outfit text-white-200 pb-12 text-center font-medium lg:text-5xl">
            Our Passionate Team
          </h2>
          {/* Team members would be listed here */}
          <div className="flex flex-col justify-around gap-8 lg:flex-row">
            <TeamProfile />
          </div>
        </section>
      </div>
    </div>
  );
}

function BannerPromote() {
  return (
    <div
      className="bg-opacity-20 bg-fill relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BannerImg})`,
      }}
    >
      <section className="container mx-auto py-25 lg:py-50">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <h1 className="font-outfit text-h1 text-white-200 font-medium lg:text-7xl">
              Let's Create Something's Unforgettable
            </h1>
            <p className="font-nunito text-white-400 text-base lg:w-3/4 lg:text-lg">
              Whether you're planning a performance or producing a podcast,
              we're here to make it exceptional.
            </p>
          </div>
          <Link to="#" className="primary-btn">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
