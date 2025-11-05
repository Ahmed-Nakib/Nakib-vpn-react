import React, { useEffect, useState, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import userImage from "../assets/user.png";
import locationImage from "../assets/location.png";
import storageImage from "../assets/storage.png";

// 🔸 Count-up component
const Counter = ({ target, duration, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return <span>{count}+</span>;
};

const Statistics = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  // 🔹 Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // 🔹 Framer motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={sectionRef} className="max-w-[1440px] mx-auto px-6 py-16">
      <Motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="bg-white dark:bg-[#0f0f0f] rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 overflow-hidden"
      >
        {/* Users */}
        <Motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-1/3 py-6 md:py-0 px-6 space-y-2 md:space-y-0 md:space-x-4"
        >
          <div className="bg-[#F53838]/20 rounded-full p-4 flex items-center justify-center">
            <img src={userImage} alt="Users" className="w-10 md:w-12" />
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">
              <Counter target={90} duration={2000} isVisible={visible} />
            </h3>
            <span className="text-gray-600 dark:text-gray-400">Users</span>
          </div>
        </Motion.div>

        {/* Locations */}
        <Motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-1/3 py-6 md:py-0 px-6 space-y-2 md:space-y-0 md:space-x-4"
        >
          <div className="bg-[#F53838]/20 rounded-full p-4 flex items-center justify-center">
            <img src={locationImage} alt="Locations" className="w-10 md:w-12" />
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">
              <Counter target={30} duration={2000} isVisible={visible} />
            </h3>
            <span className="text-gray-600 dark:text-gray-400">Locations</span>
          </div>
        </Motion.div>

        {/* Servers */}
        <Motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-1/3 py-6 md:py-0 px-6 space-y-2 md:space-y-0 md:space-x-4"
        >
          <div className="bg-[#F53838]/20 rounded-full p-4 flex items-center justify-center">
            <img src={storageImage} alt="Servers" className="w-10 md:w-12" />
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">
              <Counter target={50} duration={2000} isVisible={visible} />
            </h3>
            <span className="text-gray-600 dark:text-gray-400">Servers</span>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Statistics;
