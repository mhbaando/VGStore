import React, { useState } from "react";
import { motion } from "framer-motion";

const SubscibeNews = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: ["10%", "0%"] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="vg__subscribeNews"
    >
      <h3>Subscribe For Our Newsletter</h3>
      <h4>Stay Up To Date With Us</h4>
      <div>
        <form action="#">
          <input type="email" placeholder="e-mail" />
          <div className="line"></div>
          <button type="submit">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default SubscibeNews;
