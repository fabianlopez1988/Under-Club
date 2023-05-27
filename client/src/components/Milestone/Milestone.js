import React, { useEffect } from "react";
import "./Milestone.css";
import tresornight from "../../assets/tresornight3.png";
import Bassiani from "../../assets/Bassiani.png";
import underground from "../../assets/underground-resistance.jpg";
import tierra from "../../assets/tierra.png";
import { motion, useScroll } from "framer-motion";

const Milestone = () => {
  const { scrollYProgress } = useScroll();

  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);

  const lineOneTresor = `"Incluso antes de ver el lugar, había algo especial en el aire. En
  la parte delantera había unas ventanas enrejadas que daban al
  sótano, y salía un aire helado. Así que fue obvio para nosotros:
  tenemos que bajar allí". Dimitri Hegeman.`;

  const lineTwoTresor = `Tresor es uno de los clubes más emblemáticos a nivel mundial, una
  institución de la música techno, legitimada por el paso del tiempo.
  En agosto del 2022, Under Club tuvo el privilegio de albergar a
  Handmade, Jonas Kopp y Dinamite, en lo que fueron noches históricas
  para todos. Conectando Sudamérica con Berlín, quedó demostrado que
  nuestro hogar crece, y lo hace fuerte.`;

  const lineOneBassiani = `"En Georgia, la rave es un acto político, y Bassiani encarna
  felizmente este credo, luchando contra las leyes de drogas del país
  y desafiando sus prejuicios sociales. Para mucha gente, es mucho más
  que un club: es un símbolo de una nueva era en Tbilisi". Paata
  Sabelashvili.`;

  const lineTwoBassiani = `Luego del éxito de la llegada de Tresor al continente sudaméricano,
  en septiembre del 2022 hubo un nuevo desembarco en la región:
  Bassiani. Desde Tbilisi, Georgia, Bassiani tiene la particularidad
  de ser un club ubicado en una región que aún sufre el paso de la
  Unión Soviética. Con una atmósfera oscura y particular, Bassiani
  ofrece maratónicas noches de techno, donde los artistas se presentan
  hasta 8 horas cada uno. Under Club sirvió de hogar para que dos de
  sus residentes, Kancheli y NDRX, nos acercaran una muestra de lo que
  allí sucede, fortaleciendo el vínculo entre Sudamérica y Europa.`;

  const lineOneUnderGround = `"No soy nada en comparación a la música. ¿Cómo puede ser mi cara más
  importante que el sonido?". UR`;

  const lineTwoUnderGround = `Underground Resistance es sinónimo de techno. Pioneros indiscutidos
  del género y fundadores autoproclamados del mismo, el colectivo de
  Detroit puso a la música en el centro de atención: el foco es ahora
  sonoro, y no visual. Con sus rostros tapados alineados con sus
  valores, han sido los generadores e impulsores de una cultura
  underground que se esparció exitosamente a lo largo del mundo.`;

  const lineThreeUnderGround = `Jeff Mills (miembro fundador), y artistas relacionados con el
  colectivo tales como Juan Atkins, Derrick May, Kevin Saunderson, y
  Carl Craig, son algunos de los nombres que han confiado en Under
  Club y pasado por nuestro hogar, dejando un pedazo de historia en la
  escena local.`;

  const lineOneWorld = `Under Club logró desarrollar un sonido propio y característico
  gracias a una curaduría formada tanto por su público como por el
  Club. El fruto de este trabajo en conjunto nos dio la posibilidad de
  unir fuerzas con Paraguay, Chile, Colombia, España y Holanda,
  trasladando nuestro sonido a lo largo del continente Sudamericano y
  Europeo, representando a nuestro país en el exterior.`;

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.01,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="milestone-container"
    >
      <div className="grid-milestone">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="img-milestone-container"
        >
          <img className="tresor-img" src={tresornight} alt="tresor"/>
        </motion.div>

        <div className="parrafo-container">
          <motion.h6 variants={sentence} initial="hidden" animate="visible">
            {lineOneTresor.split("").map((char, index) => {
              return (
                <motion.span style={{fontStyle: "italic"}} key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            <br />
            {lineTwoTresor.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h6>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div className="grid-line">
          <div></div>
          <div className="line"></div>
          <div></div>
        </div>

        <div className="grid-line">
          <div></div>
          <div className="line-one"></div>
          <div></div>
        </div>
      </motion.div>

      <div className="grid-milestone inversa">
        <div className="parrafo-container-left-milestone">
          <motion.h6 variants={sentence} initial="hidden" animate="visible">
            {lineOneBassiani.split("").map((char, index) => {
              return (
                <motion.span style={{fontStyle: "italic"}} key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            <br />
            {lineTwoBassiani.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h6>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="img-milestone-container-bassiani"
        >
          <img className="bassiani-img" src={Bassiani} alt="bassiani"/>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div className="grid-line">
          <div></div>
          <div className="line-center"></div>
          <div></div>
        </div>

        <div className="grid-line">
          <div></div>
          <div className="line-two"></div>
          <div></div>
        </div>
      </motion.div>

      <div className="grid-milestone">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="img-milestone-container"
        >
          <img className="underground-img" src={underground} alt="underground"/>
        </motion.div>
        <div className="parrafo-container">
          <motion.h6 variants={sentence} initial="hidden" animate="visible">
            {lineOneUnderGround.split("").map((char, index) => {
              return (
                <motion.span style={{fontStyle: "italic"}} key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            <br />
            {lineTwoUnderGround.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            {lineThreeUnderGround.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h6>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div className="grid-line">
          <div></div>
          <div className="line-under"></div>
          <div></div>
        </div>

        <div className="grid-line">
          <div></div>
          <div className="line-three"></div>
          <div></div>
        </div>
      </motion.div>

      <div className="grid-milestone inversa">
        <div className="parrafo-container-left-milestone">
          <motion.h6 variants={sentence} initial="hidden" animate="visible">
            {lineOneWorld.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h6>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="img-milestone-container tierras"
        >
          <img className="tierra-img" src={tierra} alt="tierra"/>
        </motion.div>
      </div>

      <div className="banner-milestones">
        <p className="banner-milestones-text">
          Tras casi 10 años de arduo trabajo, nos enorgullece mirar atrás y ver
          todo lo que hemos logrado construir hasta el momento.
          <br></br>
          <br></br>
          A todos aquellos que nos permiten continuar creciendo y
          desarrollando nuestro sueño
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div className="grid-line exception">
          <div></div>
          <div className="line-center-gracias"></div>
          <div></div>
        </div>

        <div className="grid-line exception" style={{ marginBottom: "5%" }}>
          <div className="text-gracias-milestone">GRACIAS</div>
          <div className="line-four-small"></div>
          <div></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Milestone;
