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
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>
          Trusted by <br />
          Thousands of Happy <br />
          <span>Customers</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Modi dolore commodi debitis cupiditate voluptatum.
        </p>
      </div>

      <div className="testimonial-slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-location">{t.location}</p>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-rating">{t.rating} ★</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
