import React, { useRef, useEffect, useState } from "react";
import featureImage from "../assets/features.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion as Motion, useAnimation } from "framer-motion";

const Features = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👀 Intersection Observer — animation starts when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // 🎬 Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-12 my-16 overflow-hidden"
    >
      {/* ------ Left Side (Image) ------ */}
      <Motion.div
        className="w-full md:w-1/2 flex justify-center p-4"
        variants={leftVariant}
        initial="hidden"
        animate={controls}
      >
        <img
          src={featureImage}
          alt="Features"
          className="w-full max-w-md md:max-w-lg"
        />
      </Motion.div>

      {/* ------ Right Side (Text & List) ------ */}
      <Motion.div
        className="w-full md:w-1/2 p-4 space-y-4"
        variants={rightVariant}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          We Provide Many <br /> Features You Can Use
        </h2>

        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Modi dolore commodi debitis cupiditate voluptatum.
        </p>

        <div className="space-y-3">
          {[
            "Powerful and secure connection",
            "No data tracking policy",
            "Unlimited bandwidth and speed",
            "Available in all countries",
            "24/7 customer support",
          ].map((text, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="flex items-center"
            >
              <IoIosCheckmarkCircle
                className="text-green-600 flex-shrink-0"
                size={20}
              />
              <p className="pl-2 text-gray-700 dark:text-gray-300">{text}</p>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Features;
