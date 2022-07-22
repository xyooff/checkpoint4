import React, { useEffect } from "react";
import Typed from "typed.js";
import welcomeLogo from "../../assets/mac-unsplash.jpg";
import "./WelcomeBan.css";

export default function WelcomeBan() {
  const typedRef = React.useRef(null);
  const elementId = "#span";

  useEffect(() => {
    const options = {
      strings: ["rigueur", "curiosité", "creativité", "passion"],
      tagName: "typeed1",
      elementId,
      fadeOut: false,
      fadeOutClass: ".text-success",
      typeSpeed: 80,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };
    const typed = new Typed(elementId, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="welcome-title">
      <h1 className="welcome-h1">Développeur Web</h1>
      <img
        className="module-text-docoration"
        src={welcomeLogo}
        alt="computer"
      />
      <h2>
        <span id="span" ref={typedRef} />{" "}
      </h2>
    </div>
  );
}
