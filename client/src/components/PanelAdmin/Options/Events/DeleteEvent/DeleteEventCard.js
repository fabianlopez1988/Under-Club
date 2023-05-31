import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteEvent, getAllEvent } from "../../../../../store/events";
import "./DeleteEventCard.css";
import Swal from "sweetalert2";

const DeleteEventCard = ({ event }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllEvent()));
  };

  return (
    <div className="card-container">
      <img src={event.flyerGrid} alt={event._id} />
      <button onClick={() => handleDelete(event._id)}>Borrar</button>
    </div>
  );
};

export default DeleteEventCard;