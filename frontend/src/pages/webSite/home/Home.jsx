import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { motion } from "framer-motion";
import WelcomeBan from "../../../components/WelcomeBan/WelcomeBan";

export default function Home() {
  const [about, setAbout] = useState([]);
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(212,163,115, 1)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(212,163,115, 1)",
    },
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/about/1`)
      .then((res) => res.data)
      .then((data) => setAbout(data));
  }, []);

  return (
    <div>
      <WelcomeBan />
      <div className="welcome-about">
        <div className="welcome-about-h2-p-svg">
          <div className="welcome-about-h2-p">
            <h2 className="welcome-about-h2">À propos de moi</h2>
            {about.map((item) => {
              return <p className="welcome-about-p">{item.about}</p>;
            })}
          </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 374.999991"
            className="item"
          >
            <a href="www.linkedin.com/in/rodrigue-techer">
              <motion.path
                className="item"
                d="M 280.730469 0.148438 L 93.972656 0.148438 C 42.226562 0.148438 0 42.378906 0 94.121094 L 0 281.175781 C 0 332.621094 42.226562 374.851562 93.972656 374.851562 L 281.027344 374.851562 C 332.773438 374.851562 375 332.621094 375 280.878906 L 375 94.121094 C 374.703125 42.378906 332.472656 0.148438 280.730469 0.148438 Z M 124.902344 303.480469 L 71.371094 303.480469 L 71.371094 148.839844 L 124.902344 148.839844 Z M 97.839844 125.050781 C 82.671875 125.050781 70.480469 112.855469 70.480469 97.691406 C 70.480469 82.523438 82.671875 70.332031 97.839844 70.332031 C 113.003906 70.332031 125.199219 82.523438 125.199219 97.691406 C 124.902344 112.855469 112.707031 125.050781 97.839844 125.050781 Z M 303.332031 303.480469 L 258.722656 303.480469 L 258.722656 228.539062 C 258.722656 210.398438 256.34375 187.203125 231.660156 187.203125 C 206.382812 187.203125 202.21875 206.828125 202.21875 227.347656 L 202.21875 303.480469 L 157.613281 303.480469 L 157.613281 148.839844 L 199.246094 148.839844 L 199.246094 169.65625 L 200.4375 169.65625 C 206.980469 157.761719 222.144531 148.542969 245.9375 148.542969 C 295.003906 148.542969 303.628906 176.792969 303.628906 218.726562 L 303.628906 303.480469 Z M 303.332031 303.480469 "
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                }}
              />
            </a>
          </motion.svg>
        </div>
        <div className="welcome-link">
          <Link className="welcome-about-link" to="/competences">
            En savoir plus
          </Link>
        </div>
        <img className="module-service-all" src="" alt="" />
      </div>
      <div className="module-service-all">
        <div className="module-service-both">
          <div className="module-service-one">
            <h3 className="module-service-all-h3">Full stack</h3>
            <p className="module-service-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer{" "}
            </p>
          </div>
          <div className="module-service-two">
            <h3 className="module-service-all-h3">Experience Métier</h3>
            <p className="module-service-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer{" "}
            </p>
          </div>
        </div>
        <div className="module-service-last">
          <div>
            <h3 className="module-service-last-h3">Autonomie</h3>
            <p className="module-service-last-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer{" "}
            </p>
          </div>
          <div className="module-service-last-one">
            <h3 className="module-service-last-h3">Polyvalent</h3>
            <p className="module-service-last-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="module-service">
        <div className="module-service-contact-all-p">
          <h2 className="module-service-contact">Contactez-moi</h2>
          <img className="module-service-contatc-im" src="" alt="" />
          <p className="module-service-p-contact">
            • Vous souhaitez faire développer un site web, une application web,
            une application mobile
          </p>
          <p className="module-service-p-contact">
            • Vous cherchez un collaborateur pour travailler sur un beau projet
          </p>
          <p className="module-service-p-contact">
            • Vous voulez juste me dire bonjour
          </p>
          <p className="module-service-p-contact">
            •Contactez-moi sans plus attendre !
          </p>
          <button className="module-service-button" type="button">
            contact
          </button>
        </div>
      </div>
    </div>
  );
}
