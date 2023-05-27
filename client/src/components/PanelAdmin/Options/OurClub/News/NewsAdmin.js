import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NewsAdmin.css";

function NewsAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate;

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="news-options-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/ourclub/news/addnews">
          <button>Crear un Noticia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/news/updatenews">
          <button>Editar un Noticia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/news/deletenews">
          <button>Borrar un Noticia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
}

export default NewsAdmin;
