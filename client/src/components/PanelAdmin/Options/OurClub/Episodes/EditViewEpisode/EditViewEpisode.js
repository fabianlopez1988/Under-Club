import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllEpisodes,
  getEpisode,
  updateEpisode,
} from "../../../../../../store/episodes";
import "./EditViewEpisode.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditViewEpisode = () => {
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
    dispatch(getEpisode(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const episodeRedux = useSelector((state) => state.episode);

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const blob = URL.createObjectURL(file);
  //   setBaseImage(blob);
  // };

  const uploadImage = (e) => {
    const blob= e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImage(reader.result);
  }}

  const handleClick = (baseImage) => {
    dispatch(
      updateEpisode({
        flyer: baseImage === "" ? episodeRedux.flyer : baseImage,
        intro:
          intro.value.length === 0 ? episodeRedux.intro : intro.value,
        url:
          url.value.length === 0 ? episodeRedux.url : url.value,
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
      .then(() => dispatch(getAllEpisodes()))
      .then(() => navigate("/admin/ourclub/episodes"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container-episode">
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
          {!baseImage ? (
            <img
              height={"200px"}
              src={episodeRedux?.flyer}
              alt={episodeRedux?._id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Intro</Form.Label>
          <br></br>
          <textarea maxLength="500" placeholder={episodeRedux?.intro} {...intro}></textarea>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>url</Form.Label>
          <br></br>
          <input placeholder={episodeRedux?.url} {...url}></input>
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewEpisode;