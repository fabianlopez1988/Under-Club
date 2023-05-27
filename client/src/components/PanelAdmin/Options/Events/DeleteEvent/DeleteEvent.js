import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEvent } from "../../../../../store/events";
import DeleteEventCard from "./DeleteEventCard";
import "./DeleteEvent.css";

const DeleteEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllEvent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div className="delete-container">
      <h1>Borrar Evento</h1>
      <div className="grid">
        {events?.data.map((event) => (
          <DeleteEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DeleteEvent;
