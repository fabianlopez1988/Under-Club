import React, { useEffect } from "react";
import IntroCulture from "./IntroCulture/IntroCulture";
import "./Culture.css";
import { motion } from "framer-motion";

const Culture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="culture-container"
      // initial={{width: 0}}
      // animate={{width: "100%"}}
      // exit={{x: window.innerWidth, transition: { duration: 0.1}}}
    >
      <section className="intro">
        <IntroCulture />
      </section>

      <section className="culture-section ">
        {
          <div>
            <div className="grid1">
              <div className="box left">
                <h1>Permiso</h1>
                <h1 className="violet">Perdón</h1>
                <h1>Gracias</h1>
                <p>
                  Nuestro idioma debe estar presente en todo momento y en cada
                  rincón de nuestro hogar.{" "}
                </p>
              </div>
              <div className="container-lines">
                <div className="first-line"></div>
                <div className="first-line2"></div>
              </div>

              <div className="box right">
                <h1>NO FOTOS</h1>
                <h1 className="violet">NO</h1>
                <h1>VIDEOS</h1>
                <p>
                  Cuidar el clima de conexión musical es parte de nuestra
                  misión. Es por esta misma razón que no permitimos capturar
                  momentos con aparatos tecnológicos.{" "}
                </p>
              </div>
            </div>

            <div className="grid2">
              <div className="box center-left">
                <h1>NO VIP</h1>
                <h1>SOMOS TODOS</h1>
                <h1 className="violet">iguales</h1>
                <p>
                  Es importante comprender que en nuestros encuentros somos
                  todos iguales. No contamos con sectores exclusivos.
                </p>
              </div>

              <div className="second-line"></div>
            </div>

            <div className="grid3">
              <div className="third-line"></div>

              <div className="box center-right">
                <h1>
                  <span className="violet">Green </span>club
                </h1>
                <p>
                  Somos conscientes del impacto que generamos en el medio
                  ambiente. Hoy podemos decir que reciclamos la totalidad de los
                  envases que utilizamos en cada uno de nuestros eventos
                  (plástico, latas, y vidrios). Continuamos trabajando en
                  alternativas que reduzcan el impacto ambiental y generen mayor
                  conciencia acerca de la huella que dejamos.
                </p>
              </div>
            </div>
          </div>
        }
      </section>
    </motion.div>
  );
};

export default Culture;
