import React, { useEffect, useRef } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Gift from "../assets/box.png";

const Pricing = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // 👁️ Trigger animation when section enters viewport
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

  // ✨ Data for plans
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      color: "from-white to-orange-100",
      accent: "#F53838",
      features: ["1 Project", "Basic Support", "Community Access"],
    },
    {
      name: "Pro Plan",
      price: "$19/mo",
      color: "from-white to-purple-100",
      accent: "#8B5CF6",
      features: [
        "10 Projects",
        "Priority Support",
        "Advanced Analytics",
        "Custom Domain",
      ],
    },
    {
      name: "Premium Plan",
      price: "$49/mo",
      color: "from-white to-pink-100",
      accent: "#EC4899",
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "Team Collaboration",
        "Dedicated Manager",
        "Premium Tools Access",
      ],
    },
  ];

  // 🎞️ Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto items-center px-6 py-16 my-20 overflow-hidden"
    >
      {/* Header */}
      <Motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="text-center max-w-[600px] mx-auto space-y-4"
      >
        <h3 className="font-bold text-4xl text-gray-800">
          Choose Your <span className="text-[#F53838]">Plan</span>
        </h3>
        <p className="text-gray-600">
          Choose a plan that fits your needs. Upgrade anytime as you grow!
        </p>
      </Motion.div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16">
        {plans.map((plan, i) => (
          <Motion.div
            key={plan.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-b ${plan.color} shadow-lg hover:shadow-2xl rounded-2xl p-8 w-full max-w-sm border border-gray-100 text-center flex flex-col items-center gap-4 transition-all duration-300`}
          >
            {/* Image */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-inner">
              <img src={Gift} alt="Gift Icon" className="w-12 h-12" />
            </div>

            {/* Title */}
            <h4
              className="text-2xl font-semibold"
              style={{ color: plan.accent }}
            >
              {plan.name}
            </h4>

            {/* Features */}
            <ul className="space-y-2 text-gray-700 text-sm text-left mt-2 w-full px-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <IoIosCheckmarkCircle className="text-green-500 text-lg" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price */}
            <strong className="text-3xl mt-4" style={{ color: plan.accent }}>
              {plan.price}
            </strong>

            {/* Button */}
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full py-2.5 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                background: plan.accent,
              }}
            >
              Select
            </Motion.button>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
