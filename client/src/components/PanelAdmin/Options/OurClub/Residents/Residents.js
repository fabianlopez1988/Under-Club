import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Residents.css";

function Residents() {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate

  useEffect(() => {
    if (!user) navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="residents-options-container">
    <h1>Configuraciones</h1>
    <ul>
      <Link className="links-options" to="/admin/ourclub/residents/addresidents">
        <button>Crear un Residente</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/residents/updateresidents">
        <button>Editar un Residente</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/residents/deleteresidents">
        <button>Borrar un Residente</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub">
        <button style={{ marginTop: "15%" }}>Volver Atrás</button>
      </Link>
    </ul>
  </div>
  );
}

export default Residents;
