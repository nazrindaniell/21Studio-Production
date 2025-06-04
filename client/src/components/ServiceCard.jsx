function ServiceCard({ heading, desc, image, link }) {
  return (
    <>
      <div className="group relative h-[400px] w-[100%] flex-none snap-start overflow-hidden rounded-3xl lg:h-[550px] lg:w-[600px] lg:snap-center">
        {/* Background Image */}
        <img
          src={image}
          alt={heading}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-h3 font-outfit text-white-200 font-bold drop-shadow-md">
                {heading}
              </h3>
              <p className="text-body font-nunito text-white-300 lg:text-lg">
                {desc}
              </p>
            </div>
            <a
              href={link}
              className="text-lime font-outfit hover:text-lime/80 flex items-center gap-3 text-base font-medium transition-all duration-300 hover:translate-x-1 lg:text-lg"
            >
              See Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
