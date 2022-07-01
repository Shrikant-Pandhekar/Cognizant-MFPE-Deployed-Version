import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState({
    username: "amruta",
    password: "1234",
  });

  const { username, password } = name;

  const inputEvents = (event) => {
    const { name, value } = event.target;

    setName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      setName({ ...name });

      console.log(name);

      var body = {
        username: username,
        password: password,
      };

      axios.post("http://localhost:8081/getToken", body).then((response) => {
        if (response.data != null) {
          const d = response.data;
          sessionStorage.setItem("AuthUser", d.jwttoken);
          // console.log(d.jwttoken);
          console.log(response.data);
          navigate("/dashboard");
        }
      });
      // console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    // <div className="App">
    //   <div className="afcontainer">
    //     <div className="afform">
    //       <form className="appform">
    //         <div className="oneblockapp">
    //           <input
    //             type="email"
    //             name="email"
    //             id="email"
    //             placeholder="Email"
    //             onChange={inputEvents}
    //             value={username}
    //           />
    //         </div>
    //         <div className="oneblockapp">
    //           <input
    //             type="text"
    //             name="password"
    //             id="password"
    //             placeholder="password"
    //             onChange={inputEvents}
    //             value={password}
    //           />
    //         </div>
    //         <button type="submit" onClick={onSubmit}>
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={inputEvents}
                    value={username}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={inputEvents}
                    value={password}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    for="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
