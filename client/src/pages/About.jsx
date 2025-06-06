import { Link } from 'react-router-dom';
import ServicePillars from '../components/ServicePillars';

function About() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative">
      <div className="bg-black-100 h-svh w-full"></div>
      <section className="absolute top-1/2 left-1/2 container mx-auto -translate-1/2 transform">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-h1 text-white-200 font-outfit text-center font-medium lg:text-7xl">
                More Than a Studio <br className="hidden lg:inline" /> We're a movement
              </h1>
              <p className="font-nunito text-white-300 text-center text-base lg:w-1/2 lg:text-lg">
                We don't just provide equipment — we create experience. 21Studio Production is where
                vision meets execution
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
          <div className="flex flex-row items-center justify-center gap-4">
            <ServicePillars />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
