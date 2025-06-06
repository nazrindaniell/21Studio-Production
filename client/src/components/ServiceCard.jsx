/**
 * ServiceCard component that displays a service with image, heading, description, and link
 *
 * @param {Object} props - Component props
 * @param {string} props.heading - The heading for the service card
 * @param {string} props.desc - The description text for the service
 * @param {string} props.image - The image URL for the service
 * @param {string} props.link - The URL to link to when "See Details" is clicked
 * @returns {JSX.Element} A service card component
 */
function ServiceCard({ heading, desc, image, link }) {
  return (
    <div className="group relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[550px]">
      {/* Background Image with hover effect */}
      <img
        src={image}
        alt={heading}
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* Service information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-h3 font-outfit text-white-200 font-bold drop-shadow-md">
              {heading}
            </h3>
            <p className="text-body font-nunito text-white-300 lg:text-lg">{desc}</p>
          </div>

          {/* Call-to-action link */}
          <a
            href={link}
            className="text-lime font-outfit hover:text-lime/80 flex items-center gap-2 text-base font-medium transition-all duration-300 hover:translate-x-1 lg:text-lg"
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
              aria-hidden="true"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
