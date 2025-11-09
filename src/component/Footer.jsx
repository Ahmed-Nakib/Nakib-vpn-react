import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logoImage from "../assets/logo.png";
import { motion as Motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <Motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-md shadow-sm border-t border-gray-100 mt-20 overflow-hidden"
    >
      <div className="max-w-[1440px] container mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-gray-700">

        {/* ---------- Logo & About ---------- */}
        <Motion.div custom={0} variants={fadeUp}>
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImage} alt="NakibVPN" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-[#F53838]">NakibVPN</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
            NakibVPN is a private virtual network that provides fast connection,
            strong encryption, and ultimate privacy protection.
          </p>

          {/* Social Links */}
          <Motion.div
            custom={0.5}
            variants={fadeUp}
            className="flex gap-4 mt-5 text-gray-500 text-lg"
          >
            <a href="#" className="hover:text-[#F53838] transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#F53838] transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#F53838] transition duration-300">
              <FaInstagram />
            </a>
          </Motion.div>

          <p className="text-xs mt-6 text-gray-400">© 2025 NakibVPN. All Rights Reserved.</p>
        </Motion.div>

        {/* ---------- Product ---------- */}
        <Motion.div custom={1} variants={fadeUp}>
          <h3 className="font-semibold mb-3 text-gray-900">Product</h3>
          <ul className="space-y-2 text-sm">
            {["Download", "Pricing", "Locations", "Server", "Countries", "Blog"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#F53838] transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </Motion.div>

        {/* ---------- Engage ---------- */}
        <Motion.div custom={1.5} variants={fadeUp}>
          <h3 className="font-semibold mb-3 text-gray-900">Engage</h3>
          <ul className="space-y-2 text-sm">
            {["NakibVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#F53838] transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </Motion.div>

        {/* ---------- Earn Money ---------- */}
        <Motion.div custom={2} variants={fadeUp}>
          <h3 className="font-semibold mb-3 text-gray-900">Earn Money</h3>
          <ul className="space-y-2 text-sm">
            {["Affiliate", "Become Partner"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#F53838] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>

      {/* ---------- Bottom Line ---------- */}
      <Motion.div
        custom={2.5}
        variants={fadeUp}
        className="border-t border-gray-100 mt-8 text-center py-4 text-sm text-gray-500"
      >
        Made with ❤️ by{" "}
        <span className="text-[#F53838] font-semibold">Nakib</span>
      </Motion.div>
    </Motion.footer>
  );
};

export default Footer;
