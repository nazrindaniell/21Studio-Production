import HomeBg from "../assets/home-background.webp";
import ServiceCarousel from "../components/ServiceCarousel";
import TestimonialImg from "../assets/testimonial-img.webp";
import GalleryImg from "../assets/gallery-img.webp";
import GalleryImg2 from "../assets/gallery-img2.webp";
import GalleryImg3 from "../assets/gallery-img3.webp";
/**
 * Home page component for 21Studio Production website
 * Contains hero section and service section
 */
function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <GallerySection />
      <BookingStepSection />
    </>
  );
}

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
              <p className="font-nunito text-white-200 text-base font-normal lg:text-lg">
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

function ServicesSection() {
  return (
    <div className="bg-white-200 relative">
      <section className="py-20">
        <div className="container mx-auto mb-12">
          {/* heading section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-h2 font-outfit text-black-100 text-center font-medium lg:text-5xl">
              Your Vision, Our Expertise
            </h2>
            <p className="font-monito text-black-200 w-full text-center text-base font-medium lg:w-[80%] lg:text-lg">
              At 21Studio Production, we offer more than just equipment — we
              deliver unforgettable experiences. Whether it's corporate gig,
              wedding, live show, or podcast session, we've got the talent,
              tech, and tools to make it a hit.
            </p>
          </div>
        </div>
        {/* Carousel section */}
        <ServiceCarousel />
      </section>
    </div>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-white-200 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-rows-1 gap-8 lg:grid-cols-2">
          <div className="min-h-64 w-full">
            <img
              src={TestimonialImg}
              alt="Testimonial Img"
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
          {/* grid for title & button */}
          <div className="flex flex-col justify-center gap-8 lg:gap-14 lg:pl-20">
            {/* heading wrapper */}
            <div className="flex flex-col gap-2">
              <p className="font-nunito text-base lg:text-lg">CUSTOMER STORY</p>
              <h3 className="font-nunito text-h4 lg:text-h3 text-black-100 font-semibold italic">
                "The best event partner we've ever worked with — they understood
                exactly what we needed and exceeded our expectations."
              </h3>
            </div>
            {/* button wrapper */}
            <div className="flex justify-start">
              <a href="#" className="primary-btn">
                See our testimonials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-white-200 pb-20">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center gap-4">
          <h2 className="text-h2 font-outfit text-black-100 text-center font-medium lg:text-5xl">
            Moments That Made The Stage
          </h2>
          <p className="font-nunito text-black-200 text-center text-base lg:text-lg">
            A look back at the performances, setups, and memories we've helped
            created — one event at a time
          </p>
        </div>
        {/* Gallery content */}
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 [&>img]:h-60 [&>img]:w-full lg:[&>img]:h-96">
          <img
            src={GalleryImg2}
            alt="Gallery Img"
            className="col-span-2 h-full w-full rounded-3xl object-cover object-center lg:col-span-1"
          />
          <img
            src={GalleryImg3}
            alt="Gallery Img 2"
            className="col-span-2 h-full w-full rounded-3xl object-cover object-center lg:col-span-1"
          />
          <img
            src={GalleryImg}
            alt="Gallery Img 3"
            className="col-span-2 h-full w-full rounded-3xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

function BookingStepSection() {
  return (
    <section className="bg-black-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-h2 font-outfit text-white-200 pb-10 font-medium lg:text-5xl">
            Book in Minutes, Perform for Hours
          </h2>
          {/* 1st step */}
          <div className="border-white-200 flex flex-col gap-4 border-b pb-5">
            <div className="flex flex-row items-center">
              <span className="text-lime text-h3 font-outfit flex self-start pr-14 font-light">
                01
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-outfit text-h4 lg:text-h3 text-white-200">
                  Sign Up or Log in
                </h3>
                <p className="text-white-300 font-nunito text-base lg:text-lg">
                  Create an account to unlock booking form.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd step */}
        <div className="border-white-200 flex flex-col gap-4 border-b py-5">
          <div className="flex flex-row items-center">
            <span className="text-lime text-h3 font-outfit flex self-start pr-14 font-light">
              02
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-h4 lg:text-h3 text-white-200">
                Choose your services
              </h3>
              <p className="text-white-300 font-nunito text-base lg:text-lg">
                Select exactly what you need and tell us your event vision.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd step */}
        <div className="border-white-200 flex flex-col gap-4 border-b py-5">
          <div className="flex flex-row items-center">
            <span className="text-lime text-h3 font-outfit flex self-start pr-14 font-light">
              03
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-h4 lg:text-h3 text-white-200">
                Get a Quotation
              </h3>
              <p className="text-white-300 font-nunito text-base lg:text-lg">
                Our team will review your request and send you a custom quote
                via email.
              </p>
            </div>
          </div>
        </div>
        {/* 4th step */}
        <div className="border-white-200 flex flex-col gap-4 border-b py-5">
          <div className="flex flex-row items-center">
            <span className="text-lime text-h3 font-outfit flex self-start pr-14 font-light">
              04
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-h4 lg:text-h3 text-white-200">
                Finalize & Perform
              </h3>
              <p className="text-white-300 font-nunito text-base lg:text-lg">
                Approve the quote and let us handle the magic behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
