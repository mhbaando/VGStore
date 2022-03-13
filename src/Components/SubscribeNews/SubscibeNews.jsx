import React, { useState } from "react";

const SubscibeNews = () => {
  const [submited, setIsSubmitted] = useState("");
  return (
    <div className="vg__subscribeNews">
      <h3>Subscribe For Our Newsletter</h3>
      <h4>Stay Up To Date With Us</h4>
      <div>
        <input type="email" placeholder="e-mail" />
        <div className="line"></div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIsSubmitted("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SubscibeNews;
