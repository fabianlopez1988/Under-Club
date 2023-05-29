import "./History.css";
import imgOneHistory from "../../assets/img-one-history.jpeg";
import imgTwoHistory from "../../assets/img-two-history.jpeg";
import imgThreeHistory from "../../assets/img-three-history.jpeg";
import imgFiveHistory from "../../assets/img-five-history.jpeg";
import { useEffect } from "react";
import { motion } from "framer-motion";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="history-container"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <motion.div
        className="img-right-one"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={imgOneHistory} alt="imagen" />
      </motion.div>

      <div className="text-container">
        <p className="text-history">
          A tres años de la década del 2010 una nueva generación estaba
          naciendo, y con ella la llegada de mucho jóvenes dispuestos a cambiar
          el rumbo de la escena techno local.
        </p>
      </div>

      <div className="img-left-one">
        <motion.div
          className="img-left-two-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={imgTwoHistory} alt="imagen-2" />
        </motion.div>
        <div></div>
        <motion.div className="right-line"></motion.div>
      </div>
      <div className="text-container">
        <p className="text-history-center">
          Fue el 4 de febrero en la ciudad de Haedo, Buenos Aires, donde Under
          Club empezaba a dar sus primeros pasos. Un año después, abría sus
          puertas en Niceto Vega 5699, Capital Federal.
        </p>
      </div>

      <div className="img-right-two">
        <div className="left-line"></div>
        <div></div>
        <motion.div
          className="img-right-three-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <img src={imgThreeHistory} alt="imagen-3" />
        </motion.div>
      </div>

      <div className="text-container">
        <p className="text-history-last">
          A lo largo de estos 10 años, personas de todas partes del mundo
          hicieron de Under Club un espacio de amor, unión, respeto y libertad.
          <br></br>
          <br></br>
          <h4>
            <b>Nuestro Club, Nuestro Hogar. </b>
          </h4>
        </p>
      </div>
      <div className="img-left-two">
        <motion.div
          className="img-left-three-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <img src={imgFiveHistory} alt="imagen-4" />
        </motion.div>
        <div className="line-ultima"></div>
        <div className="right-line"></div>
      </div>

      <div className="grid-colum-gracias-container">
        <div className="grid-row-gracias">
          <div className="grid-column-gracias">
            <div>
              <p className="gracias">GRACIAS</p>
            </div>
            <div>
              <p>POR</p>
            </div>
            <div></div>
          </div>
          <div className="grid-column-apoyo">
            <div></div>
            <div>
              <p>EL</p>
            </div>
            <div>
              <p>APOYO</p>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default History;
