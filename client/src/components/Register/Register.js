import "./Register.css";
import imgLogin from "../../assets/imgLogin.jpg";
import Form from "react-bootstrap/Form";
import useInput from "../../utils/useInput";
import { useDispatch } from "react-redux";
import { userRegister } from "../../store/user";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) navigate("/admin");
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
      .then(() => navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-container">
      <div className="form-container-register">
        <h1>Registrarse</h1>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <br></br>
            <input
              type="email"
              placeholder="Ingrese su email"
              {...email}
            ></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <br></br>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              {...password}
            ></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Text className="text-muted">
              ¿Ya es miembro?{" "}
              <Link className="link-login" to="/login">
                Iniciar Sesión
              </Link>
            </Form.Text>
          </Form.Group>

          <button type="submit">Crear cuenta</button>
        </Form>
      </div>

      <div className="img-container">
        <img src={imgLogin} alt="img-login" />
      </div>
    </div>
  );
};

export default Register;
