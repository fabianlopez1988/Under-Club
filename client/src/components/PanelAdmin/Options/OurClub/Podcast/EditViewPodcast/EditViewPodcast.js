import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllPodcast,
  getPodcast,
  updatePodcast,
} from "../../../../../../store/podcast";
import "./EditViewPodcast.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditViewPodcast = () => {
  const { id } = useParams();
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

  useEffect(() => {
    dispatch(getPodcast(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const podcastRedux = useSelector((state) => state.podcast);

  const uploadImage = (e) => {
    const blob = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImage(reader.result);
    };
  };

  const handleClick = (baseImage) => {
    dispatch(
      updatePodcast({
        flyer: baseImage === "" ? podcastRedux.flyer : baseImage,
        intro: intro.value.length === 0 ? podcastRedux.intro : intro.value,
        url: url.value.length === 0 ? podcastRedux.url : url.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllPodcast()))
      .then(() => navigate("/admin/ourclub/podcast"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container-podcast">
      <Form onSubmit={handleSubmit}>
        <h1>Podcast</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          ></input>
          {!baseImage ? (
            <img
              height={"200px"}
              src={podcastRedux?.flyer}
              alt={podcastRedux?.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Intro (máximo 400 caracteres)</Form.Label>
          <br></br>
          <textarea
            maxLength="500"
            // onKeyUp={this.value.length >= this.maxLength ? alert("Te excediste en la cantidad de caracteres") : null}
            placeholder={podcastRedux?.intro}
            {...intro}
          ></textarea>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>url</Form.Label>
          <br></br>
          <input placeholder={podcastRedux?.url} {...url}></input>
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewPodcast;
