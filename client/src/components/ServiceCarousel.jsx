import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

/**
 * ServiceCarousel component that displays services in a responsive Swiper carousel
 *
 * Features:
 * - Responsive breakpoints for different screen sizes
 * - Navigation buttons
 * - Pagination indicators
 * - Accessibility support
 * - Overflow effect that respects container padding
 */
function ServiceCarousel() {
  // Configuration for Swiper
  const swiperConfig = {
    modules: [Navigation, Pagination, A11y],
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    breakpoints: {
      640: { slidesPerView: 1.5, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 2.5, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 30 },
    },
  };

  return (
    <div className="relative">
      {/* This creates a container respecting site padding */}
      <div className="container mx-auto overflow-hidden lg:overflow-visible">
        {/* This div allows for horizontal overflow */}
        <div className="relative overflow-visible">
          <Swiper {...swiperConfig} className="overflow-visible">
            {/* Map through services to create slides */}
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  heading={service.heading}
                  desc={service.desc}
                  image={service.image}
                  link={service.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Control elements stay within the container padding */}
        <div className="mt-8 flex justify-between">
          <div className="flex items-center gap-4">
            <div className="swiper-pagination"></div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="swiper-button-prev text-black-100 !static !mt-0 flex !h-12 !w-12 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-300 hover:bg-white"
              aria-label="Previous slide"
            >
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              className="swiper-button-next text-black-100 !static !mt-0 flex !h-12 !w-12 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-300 hover:bg-white"
              aria-label="Next slide"
            >
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCarousel;
