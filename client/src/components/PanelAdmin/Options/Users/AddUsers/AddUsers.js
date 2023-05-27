import "./AddUsers.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../utils/useInput";
import { userRegister } from "../../../../../store/user";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useInput();
  const password = useInput();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userRegister({
        email: email.value.length === 0 ? errorAlert() : email.value,
        password: password.value.length === 0 ? errorAlert() : password.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Creado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => navigate("/admin/users"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-users-container">
      <div className="form-container-add-users">
        <h1>Registrar</h1>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <br></br>
            <input
              type="email"
              placeholder="Ingrese email"
              {...email}
            ></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <br></br>
            <input
              type="password"
              placeholder="Ingrese contraseña"
              {...password}
            ></input>
          </Form.Group>

          <button className="submit" type="submit">Crear cuenta</button>
        </Form>
      </div>

    </div>
  );
};

export default AddUsers;
