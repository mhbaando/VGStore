import React from "react";
import "./Footer.scss";
import { FooterComponent } from "../../Components/index";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: ["30%", "0%"] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="section vg__navbg"
    >
      <div className="container">
        <FooterComponent />
      </div>
    </motion.div>
  );
};

export default Footer;
