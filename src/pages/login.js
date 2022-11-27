import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/sing", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid password");
      window.alert(data.err);
    } else if (res.status === 533) {
      window.alert("invalid email id");
    } else {
      window.alert("login succesfulll");
      navigate("/about");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">Welcone</span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              // label="Email address"
              placeholder="Email Address"
              id="formControlLg"
              type="email"
              size="lg"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              placeholder="Password"
              id="formControlLg"
              type="password"
              size="lg"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn
              className="mb-4 px-5 mx-5 w-100"
              color="info"
              size="lg"
              onClick={loginUser}
              type="submit"
            >
              Login
            </MDBBtn>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="/register" class="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://www.asianpaints.com/content/dam/asian_paints/colours/room-shots/teals-blues-colour-shade-asian-paints-7531.jpg"
            alt="Login imzage"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
