import React, { useEffect, useRef,  } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import bannerImage from "../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // 👁️ Detect section in viewport
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

  // 🔹 Variants for animation
  const textVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6 py-12 my-16 overflow-hidden"
    >
      {/* ---------- Left Content ---------- */}
      <Motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0"
        variants={textVariant}
        initial="hidden"
        animate={controls}
      >
        <h1 className="font-bold text-3xl md:text-4xl leading-snug mb-6">
          Want anything to be <br /> easy with{" "}
          <span className="font-extrabold text-[#F53838]">
            <Typewriter
              words={["NakibVpn"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-gray-600 py-4 text-justify max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          accusamus enim mollitia molestiae, asperiores autem atque laboriosam
          optio numquam? Fuga earum reiciendis odio maxime deleniti possimus.
          Eveniet modi rerum esse.
        </p>

        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 text-white bg-[#F53838] rounded-2xl border border-[#F53838]
          hover:bg-white hover:text-[#F53838] transition-all duration-300 shadow-md"
        >
          Get Started
        </Motion.button>
      </Motion.div>

      {/* ---------- Right Content (Image) ---------- */}
      <Motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={imageVariant}
        initial="hidden"
        animate={controls}
      >
        <img
          src={bannerImage}
          alt="VPN Banner"
          className="w-full max-w-lg md:max-w-xl"
        />
      </Motion.div>
    </section>
  );
};

export default Hero;
