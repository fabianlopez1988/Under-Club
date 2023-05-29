import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AddNews.css";
import { useNavigate } from "react-router-dom";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addNews } from "../../../../../../store/news";

function AddNews() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [baseImage, setBaseImage] = useState("");

  const newsTitle = useInput();
  const newsDescription = useInput();
  const date = useInput();

  const [newsBody, setNewsBody] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = (e) => {
    const blob = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImage(reader.result);
    };
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleClick = (baseImage) => {
    if (baseImage) {
      dispatch(
        addNews({
          newsTitle:
            newsTitle.value.length === 0
              ? errorAlert()
              : newsTitle.value
                  .trim()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, ""),
          photo: baseImage || errorAlert(),
          date: date.value.length === 0 ? errorAlert() : date.value,
          newsDescription:
            newsDescription.value.length === 0
              ? errorAlert()
              : newsDescription.value,
          newsBody: newsBody === "" ? errorAlert() : newsBody,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Creado",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate("/admin/ourclub/news"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-news-container">
      <Form onSubmit={handleSubmit}>
        <h1>Noticias y entrevistas</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Foto 800 x 500px</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          ></input>
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Título</Form.Label>
          <br></br>
          <input
            placeholder="Ingrese el título de la noticia"
            {...newsTitle}
          ></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Descripción</Form.Label>
          <br></br>
          <textarea
            maxLength="500"
            placeholder="Escriba una breve introducción"
            {...newsDescription}
          ></textarea>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Fecha de la noticia</Form.Label>
          <br></br>
          <input
            type="date"
            placeholder="Fecha de creación de la noticia"
            {...date}
          ></input>
        </Form.Group>

        <h3>Cuerpo de la noticia</h3>
        <ReactQuill theme="snow" value={newsBody} onChange={setNewsBody} />
        <button
          className="submit"
          type="submit"
          onClick={() => handleClick(baseImage)}
        >
          Guardar
        </button>
      </Form>
    </div>
  );
}

export default AddNews;
