import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./EpisodeAdmin.css";

function PodcastAdmin() {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate

  useEffect(() => {
    if (!user) navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="episode-options-container">
    <h1>Configuraciones</h1>
    <ul>
      <Link className="links-options" to="/admin/ourclub/episode/addepisode">
        <button>Crear un Episodio</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/episode/updateepisode">
        <button>Editar un Episodio</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/episode/deleteepisode">
        <button>Borrar un Episodio</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub">
        <button style={{ marginTop: "15%" }}>Volver Atrás</button>
      </Link>
    </ul>
  </div>
  );
}

export default PodcastAdmin;
