import HomeBg from "../assets/home-background.webp";

function Home() {
  return (
    <>
      <div className="">
        <img
          src={HomeBg}
          alt="Home background"
          className="h-svh w-full object-cover object-center"
        />
        <section className="absolute top-1/2 left-1/2 z-30 container mx-auto flex -translate-1/2 transform">
          <div className="flex w-full items-start justify-center lg:w-1/2">
            <div className="flex flex-col items-start justify-center gap-10 lg:gap-12">
              <div className="flex flex-col gap-4">
                <h1 className="font-outfit text-white-200 text-5xl font-medium lg:text-8xl">
                  Where Sound Meets Story
                </h1>
                <p className="font-nunito text-white-300 text-lg font-normal lg:text-xl">
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
    </>
  );
}

export default Home;
