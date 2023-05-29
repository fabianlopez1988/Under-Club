import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EventsAdmin.css";

const EventsAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="events-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/events/addevents">
          <button>Crear Evento</button>
        </Link>

        <Link className="links-options" to="/admin/events/updateevents">
          <button>Editar Evento</button>
        </Link>

        <Link className="links-options" to="/admin/events/deleteevent">
          <button>Borrar Evento</button>
        </Link>

        <Link className="links-options" to="/admin">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default EventsAdmin;
