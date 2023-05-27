import "./AddEpisode.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addEpisode } from "../../../../../../store/episodes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddEpisode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const intro = useInput();
  const url = useInput();

  const [baseImage, setBaseImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  /* convertimos la imagen a blob y seteamos el estado */
  const uploadImage = (e) => {
    const blob= e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImage(reader.result);
  }}


  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };


  const handleClick = (baseImage) => {
    if(baseImage) {
      dispatch(addEpisode({
        flyer: baseImage || errorAlert(),
        intro: intro.value.length === 0 ? errorAlert() : intro.value,
        url: url.value.length === 0 ? errorAlert() : url.value, 
      }));
      Swal.fire({
        icon: "success",
        title: "Agregado",
        text: "Agregado",
      })
      .then(() => navigate("/admin/ourclub/episodes"));
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-episode-container">
        <Form onSubmit={handleSubmit}>
          <h1>Episodios</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flyer</Form.Label>
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                uploadImage(e);
              }}
            ></input>
            <img height={"200px"} src={baseImage} alt="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>url</Form.Label>
            <br></br>
            <input
              placeholder="Ingrese la URL del episodio"
              {...url}
            ></input>
          </Form.Group> 


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Intro</Form.Label>
            <br></br>
            <textarea
              maxLength="500"
              placeholder="Escriba una breve introducción del episodio..."
              {...intro}
            ></textarea>
          </Form.Group>
          <button
            className="submit"
            type="submit"
            onClick={() => handleClick(baseImage)}
          >
            Guardar
          </button>
        </Form>
      </div>
    </>
  );
};

export default AddEpisode;
