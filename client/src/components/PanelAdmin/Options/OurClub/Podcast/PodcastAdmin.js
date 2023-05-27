import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./PodcastAdmin.css";

function PodcastAdmin() {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate

  useEffect(() => {
    if (!user) navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="podcast-options-container">
    <h1>Configuraciones</h1>
    <ul>
      <Link className="links-options" to="/admin/ourclub/podcast/addpodcast">
        <button>Crear un Podcast</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/podcast/updatepodcast">
        <button>Editar un Podcast</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/podcast/deletepodcast">
        <button>Borrar un Podcast</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub">
        <button style={{ marginTop: "15%" }}>Volver Atrás</button>
      </Link>
    </ul>
  </div>
  );
}

export default PodcastAdmin;
