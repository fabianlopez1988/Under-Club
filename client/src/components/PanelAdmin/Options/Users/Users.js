import "./Users.css"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="users-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/users/addusers">
          <button>Crear Usuario</button>
        </Link>

        <Link className="links-options" to="/admin/users/deleteusers">
          <button>Borrar Usuario</button>
        </Link>

        <Link className="links-options" to="/admin">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  )
}

export default Users