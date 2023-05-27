import "./DeleteUsers.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsersAll } from "../../../../../store/user";
import DeleteUserCard from "./DeleteUserCard"

const DeleteUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getUsersAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const users = useSelector((state) => state.user);

  return (
    <div className="delete-container-user">
    <h1>Borrar Usuario</h1>
    <div className="grid-container-user">
      {users?.data.map((userAdmin) => (
        <DeleteUserCard key={userAdmin.id} userAdmin={userAdmin} />
      ))}
    </div>
  </div>
  )
}

export default DeleteUsers