import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AgencyAdmin.css";

function AgencyAdmin() {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate

  useEffect(() => {
    if (!user) navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="agency-options-container">
    <h1>Configuraciones</h1>
    <ul>
      <Link className="links-options" to="/admin/ourclub/agency/addagency">
        <button>Crear un Residente Internacional</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/agency/updateagency">
        <button>Editar un Residente Internacional</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub/agency/deleteagency">
        <button>Borrar un Residente Internacional</button>
      </Link>

      <Link className="links-options" to="/admin/ourclub">
        <button style={{ marginTop: "15%" }}>Volver Atrás</button>
      </Link>
    </ul>
  </div>
  );
}

export default AgencyAdmin;
