import "./DeleteUserCard.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDelete, getUsersAll } from "../../../../../store/user";
import Swal from "sweetalert2";

const DeleteUserCard = ( { userAdmin } ) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(userDelete(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getUsersAll()));
  };

  return (
    <div className="card-container-user">
    <h1>{userAdmin.email}</h1>
    <button onClick={() => handleDelete(userAdmin.id)}>Borrar</button>
  </div>
  )
}

export default DeleteUserCard