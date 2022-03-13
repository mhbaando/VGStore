import React from "react";
import images from "../../Constants/images";
import { motion } from "framer-motion";
const FooterComponent = () => {
  const varients = {
    hover: { scale: 1.02, opacity: 0.58, y: "2%" },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <div className="vg__footer">
      <div className="vg__footer-info">
        <div className="vg__footer-brand">
          <img src={images.Logo} alt="VG Store" className="logo" />
          <img src={images.BackButton} alt="Go Up" className="upButton" />
        </div>
        <div className="vg__links">
          <div className="vg__links-burchase">
            <h3>Purchase & Pyment</h3>
            <a href="#">Purchase & Delivery</a>
            <a href="#">Support Hub</a>
            <a href="#">Steam Game Activation</a>
            <p>Payment</p>
            <div className="payment-icons">
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Visa}
                alt="Visa Card"
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.MasterCard}
                alt="Master Card"
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Paypal}
                alt="Paypal"
              />
            </div>
          </div>
          <div className="vg__links-information">
            <h3>Information </h3>
            <a href="#">About us</a>
            <a href="#">News</a>
            <a href="#">Blog</a>
            <a href="#">Cashback</a>
            <a href="#">Happy Hour</a>
            <a href="#">Free Games</a>
          </div>
          <div className="vg__links-contacts">
            <h3>Contacts</h3>
            <p>+252 616 500 000</p>
            <p>info@vgStore.com</p>
            <p>support@vgStore.com</p>
            <div className="footer-sicons">
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Facebook}
                alt="Our Facebook Link"
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Instagram}
                alt="Our instagram Link"
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Twitter}
                alt="Our Twitter Link "
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Youtube}
                alt="Our Youtube Link"
              />
              <motion.img
                variants={varients}
                whileHover="hover"
                src={images.Steam}
                alt="Our Steam Link"
              />
            </div>
          </div>
        </div>
        <div className="vg__upArrow">
          <a href="#">
            <motion.img
              variants={varients}
              whileHover="hover"
              src={images.BackButton}
              alt="Button Go Up"
            />
          </a>
        </div>
      </div>
      <div className="vg__footer-copyright">
        <p>© 2022 Video Game Store | All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterComponent;
