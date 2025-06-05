import StudioRentalImg from "../assets/studio-rental.webp";
import SoundSystemImg from "../assets/sound-system.webp";
import LiveBandImg from "../assets/live-bands.webp";

/**
 * Services data for 21Studio Production
 * Each service has a unique ID, heading, description, image, and link
 */
const services = [
  {
    id: "studio-rental",
    heading: "Studio Rental",
    desc: "Professionally treated acoustic spaces for recording, mixing, or rehearsals.",
    image: StudioRentalImg,
    link: "#studio-rental",
  },
  {
    id: "sound-system-rental",
    heading: "Sound System Rental",
    desc: "High-fidelity audio systems tailored for any crowd size. Perfect clarity. Zero compromise.",
    image: SoundSystemImg,
    link: "#sound-system",
  },
  {
    id: "live-bands",
    heading: "Live Bands",
    desc: "From jazz to funk to pop — our versatile bands set the tone and mood for your event.",
    image: LiveBandImg,
    link: "#live-bands",
  },
  {
    id: "event-hosting",
    heading: "Event Hosting",
    desc: "Professional hosts and MCs who keep your event flowing smoothly and your audience engaged.",
    image: StudioRentalImg, // Temporarily using the same image as Live Bands
    link: "#event-hosting",
  },
  {
    id: "custom-services",
    heading: "Custom Services",
    desc: "Tailored solutions for your unique audio-visual needs. Let's create something special together.",
    image: SoundSystemImg, // Temporarily using the same image as Sound System Rental
    link: "#custom-services",
  },
];

export default services;
