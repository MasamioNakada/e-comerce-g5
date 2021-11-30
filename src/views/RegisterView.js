import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterView() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(form.email, form.password);
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Usuario Creado!",
        showConfirmButton: false, //es para que no me muestre un boton de cierre
        timer: 2000, //ms
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      await Swal.fire({
        icon: "Error",
        title: "Oops...",
        text: "Ese usuario ya existe",
        showConfirmButton: false, //es para que no me muestre un boton de cierre
        timer: 2000, //ms
      });
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="row my-5 d-flex justify-content-center mt-5">
        <div>
          <h1 className="text-center">Registrar</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="col-lg-3 col-md-6 col-9  my-3 "
        >
          <div class="col-lg-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="inputEmail4  "
              placeholder="Ingrese email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div class="col-lg-12 ">
            <label for="inputPassword4" name="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Ingrese su contraseña"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          {/* sadadasdasdad */}

          <div className="col-lg-12  mt-3 text-center border">
            <button
              type="submit"
              className="btn btn-outline-warning   mt-3"
              disabled={loading}
            >
              Registrarse
            </button>
            <p>
              Ya tienes cuenta?{" "}
              <Link to="/login">
                <span>Inicia Sesión</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}