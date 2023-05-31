import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllEvent,
  getEvent,
  updateEvent,
} from "../../../../../store/events";
import "./EditEvents.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditEvents = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = useInput();
  const url = useInput();

  const [baseImageLarge, setBaseImageLarge] = useState("");
  const [baseImageGrid, setBaseImageGrid] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getEvent(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventsRedux = useSelector((state) => state.events);

  const uploadImageLarge = (e) => {
    const blob= e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImageLarge(reader.result);
  }}


  const uploadImageGrid = (e) => {
    const blob2= e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(blob2);
    reader.onload = () => {
      setBaseImageGrid(reader.result);
  }}

  const handleClick = (blob, blob2) => {
    dispatch(
      updateEvent({
        flyerLarge: blob === "" ? eventsRedux.flyerLarge : blob,
        flyerGrid: blob2 === "" ? eventsRedux.flyerGrid : blob2,
        date: date.value === "" ? eventsRedux.date : date.value,
        url: url.value === "" ? eventsRedux.url : url.value,
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
      .then(() => dispatch(getAllEvent()))
      .then(() => navigate("/admin/events"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container">
      <Form onSubmit={handleSubmit}>
        <h1>Eventos</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer Portada 1600 x 1600</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImageLarge(e);
            }}
          ></input>
          {/* {!baseImageLarge ? (
            <img
              height={"200px"}
              src={eventsRedux.flyerLarge}
              alt={eventsRedux.id}
            />
          ) : null} */}

          {!baseImageLarge ? (
            <img
              height={"200px"}
              src={eventsRedux?.flyerLarge}
              alt={eventsRedux?._id}
            />
          ) : null}

          <img height={"200px"} src={baseImageLarge} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer Grilla (Cuadrado) 500 x 500</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImageGrid(e);
            }}
          ></input>
          {!baseImageGrid ? (
            <img
              height={"200px"}
              src={eventsRedux?.flyerGrid}
              alt={eventsRedux?.id}
            />
          ) : null}
          <img height={"200px"} src={baseImageGrid} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date</Form.Label>
          <br></br>
          <input type="date" placeholder={eventsRedux?.date} {...date}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Url</Form.Label>
          <br></br>
          <input type="text" placeholder={eventsRedux?.url} {...url}></input>
        </Form.Group>

        <button
          type="submit"
          onClick={() => handleClick(baseImageLarge, baseImageGrid)}
        >
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditEvents;
