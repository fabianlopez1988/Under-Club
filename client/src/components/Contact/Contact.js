import "./Contact.css";
import Form from "react-bootstrap/Form";
import useInput from "../../utils/useInput";
import { useDispatch } from "react-redux";
import { sendMailToUnder } from "../../store/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  const name = useInput();
  const email = useInput();
  const comment = useInput();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mail = {
      mailPerson: name.value,
      mailFrom: email.value,
      mailBody: comment.value,
    };
    if (name.value.length && email.value.length && comment.value.length) {
      dispatch(sendMailToUnder(mail))
        .then(() =>
          Swal.fire({
            icon: "success",
            title: "Enviado",
            showConfirmButton: false,
            timer: 2500,
          })
        )
        .then(() => navigate("/"));
    } else {
      errorAlert();
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="grid-top">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7190273306924!2d-58.442355785261284!3d-34.585975380464106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f2ccacaeb1%3A0xf70477b3206c27e!2sUnder%20Club!5e0!3m2!1ses-419!2sar!4v1665092399767!5m2!1ses-419!2sar"
            style={{ width: "100%", height: "100%", filter: "grayscale(100%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid-right">
          <div className="grid-right-top">
            <h1>C1414BFE, AV. CNEL. NICETO VEGA</h1>
            <h1>5699</h1>
            <h1>BUENOS AIRES</h1>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@underclub.com"
              target="_blank"
              rel="noreferrer"
            >
              {/* <h1>INFO@UNDERCLUB.COM</h1> */}
            </a>
          </div>
          <div className="line-division"></div>
          <div className="grid-right-bottom">
            <a
              href="https://www.instagram.com/under.club.oficial/"
              target="_blank"
              rel="noreferrer"
            >
              <h1>INSTAGRAM</h1>
            </a>
            <a
              href="https://www.facebook.com/1derclub"
              target="_blank"
              rel="noreferrer"
            >
              <h1>FACEBOOK</h1>
            </a>
            <a
              href="https://soundcloud.com/under-club"
              target="_blank"
              rel="noreferrer"
            >
              <h1>SOUNDCLOUD</h1>
            </a>
            <a
              href="https://ra.co/clubs/98071"
              target="_blank"
              rel="noreferrer"
            >
              <h1>RESIDENT ADVISOR</h1>
            </a>
            <a
              href="https://www.youtube.com/c/UnderClubOficial"
              target="_blank"
              rel="noreferrer"
            >
              <h1>YOUTUBE</h1>
            </a>
          </div>
        </div>
      </div>
      <div className="grid-bottom">
        <div className="grid-line-bottom"></div>

        <div className="form-contact-container">
          <div></div>
          <div className="grid-contact-right">
            <div className="title-contact-container">
              <h1 className="title-contact">CONTACTANOS</h1>
            </div>

            <div className="form-contact">
              <div className="form-contact-left">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="label-contact">Nombre</Form.Label>
                    <br></br>
                    <input
                      className="input-name"
                      type="text"
                      placeholder="Ingrese su Nombre"
                      {...name}
                    ></input>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-contact">Correo</Form.Label>
                    <br></br>
                    <input
                      className="input-email"
                      type="email"
                      placeholder="Ingrese su correo electrónico"
                      {...email}
                    ></input>
                  </Form.Group>
                </Form>
              </div>

              <div className="form-contact-right">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label className="label-contact">
                      Comentario
                    </Form.Label>
                    <br></br>
                    <textarea
                      className="input-comment"
                      type="text"
                      placeholder="Ingrese su comentario"
                      {...comment}
                    ></textarea>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="form-button-contact">
              <Form onSubmit={handleSubmit}>
                <button id="button-contact" type="submit">
                  Enviar
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
