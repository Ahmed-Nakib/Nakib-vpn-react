import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import Map from "../assets/map.png";
import netflix from "../assets/netflix.png";
import reddit from "../assets/reddit.png";
import twitter from "../assets/amazon.png";
import spotify from "../assets/spotify.png";
import discord from "../assets/discord.png";

const Network = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // 👁️ Animate on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // ✨ Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  const logos = [netflix, reddit, twitter, spotify, discord];

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto items-center px-6 py-16 my-20 overflow-hidden"
    >
      {/* Header */}
      <Motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
        className="text-center max-w-[600px] mx-auto space-y-4"
      >
        <h3 className="font-bold text-4xl text-gray-800 leading-snug">
          Huge Global Network <br /> of{" "}
          <span className="text-[#F53838]">Fast VPN</span>
        </h3>
        <p className="text-gray-600">
          Connect anywhere around the world — enjoy blazing speed and security
          with global servers.
        </p>
      </Motion.div>

      {/* Map */}
      <Motion.div
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        animate={controls}
        className="my-16 flex justify-center"
      >
        <img
          src={Map}
          alt="Global Map"
          className="w-full max-w-5xl drop-shadow-md rounded-lg"
        />
      </Motion.div>

      {/* Partner Logos */}
      <Motion.div
        variants={fadeUp}
        custom={0.5}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-10"
      >
        {logos.map((logo, i) => (
          <Motion.img
            key={i}
            src={logo}
            alt="Partner Logo"
            className="w-24 md:w-28 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(245,56,56,0.4)]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </Motion.div>
    </section>
  );
};

export default Network;
