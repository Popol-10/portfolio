

import { useEffect, useState } from "react";
import "../../../public/assets/css/portfolio/Section1/section1.scss";
// import "../../../imagePort/popol.jpg";
import { motion } from "framer-motion";
const phrases = [
  "Frontend ",
  "Backend & Api",
  "Full Stack"
];

const Section1 = () => {
  const img = "/imagePort/popol.jpg";

  // states pour le typewriter
  const [index, setIndex] = useState(0);       // index de la phrase actuelle
  const [subIndex, setSubIndex] = useState(0); // index de la lettre
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === phrases.length) return;
    

    if (subIndex === phrases[index].length + 1 && !reverse) {
      // pause avant d'effacer
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100); // vitesse

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section id="section1">
      <div id="ContainerS">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <img src={img} alt="" />

        </motion.div>

        <h1>Développeur Web</h1>
        <h2 id="devT">
          {phrases[index].substring(0, subIndex)}
          <span className="cursor"></span>
        </h2>
      </div>

      <div id="Container2">
        <h3>
          <span>Razafindrainibe</span> Avotra Harilala Patrick
        </h3>
        <p>
          Je suis un développeur web passionné, spécialisé dans la création de
          sites modernes, responsives et adaptés à tous les supports.
          <br /><br />
          Mon objectif est de concevoir des solutions web claires et efficaces,
          qui allient design attrayant et performances optimisées.
          <br /><br />
          💡 Je maîtrise le frontend (HTML, CSS, JavaScript, React)
          ainsi que le backend (Node.js, NestJS, bases de données, API), ce qui
          me permet de développer des sites dynamiques et bien structurés.
          <br /><br />
          🚀 Curieux et motivé, j’aime apprendre en continu et mettre mes
          compétences au service de projets concrets.
        </p>
      </div>
    </section>
  );
};

export default Section1;
