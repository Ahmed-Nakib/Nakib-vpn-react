import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialSlider.css";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    text: "I like it because I like to travel far and still can connect with high speed.",
    img: user1,
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
    img: user2,
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The best VPN service I’ve ever used. Perfect for remote work and accessing region-locked content. Highly recommended!",
    img: user3,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section py-20 bg-gray-50">
      {/* Header */}
      <div className="testimonial-header text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4 text-gray-900">
          Trusted by <br />
          Thousands of Happy <br />
          <span className="text-orange-500">Customers</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We provide high-quality VPN services that help our customers stay connected and secure across the globe.
        </p>
      </div>

      {/* Slider */}
      <div className="testimonial-slider-container relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card p-6 bg-white rounded-3xl shadow-lg flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
                />
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.location}</p>
                <p className="text-gray-700 text-base italic">"{t.text}"</p>
                <div className="font-bold text-yellow-500 text-lg">{t.rating} ★</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="custom-nav-buttons absolute z-50 flex gap-4 md:flex-col md:top-1/2 md:right-0 md:-translate-y-1/2 bottom-4 right-4 transform md:translate-y-0">
          <button className="custom-prev nav-btn">
            <FaArrowLeft size={20} />
          </button>
          <button className="custom-next nav-btn">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
