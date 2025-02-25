"use client"
import { AnimatedTestimonials } from "./ui/animated-testimonials";

function HeroSectionCarousel() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/ram.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/informal.jpg",
    },
  ];
  return <div>
    <AnimatedTestimonials testimonials={testimonials}/></div>;
}

export default HeroSectionCarousel;
