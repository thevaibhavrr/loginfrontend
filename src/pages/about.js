import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import logo1 from "./images/vaii.png";
// import { useNavigate } from "react-router-dom";

export default function PersonalProfile() {


  // const callAboutPage = async () => {
  //   try {
  //     const res = await fetch("/about", {
  //       method: "GET",
  //       headers: {
  //         Accept: "appllication/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials:"include"
  //     });

  //       const data = await res.json()
  //       console.log(data)

  //       if(!res.status === 200){
  //         const error = new Error(res.error)
  //         throw error
  //       }

  //   } catch (e) {
  //     console.log(e);
      // navigate("/login");

  //   }
  // };

  // useEffect(() => {
  //   callAboutPage();
  // }, []);

  // const [userData, serUserData] = useState();

  const callAboutPage = async () => {
    // const navigate = useNavigate();

    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

        const data = await res.json();
      console.log( data)

      if(!res.status === 200){
         const error  = new Error(res.error)
         throw error
      }

    } catch (err) {
      console.log(err);
      // navigate('/login')
    }
  };

  useEffect(() => {
    callAboutPage();
  }, );


  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      {/* <form method="GET"> */}
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src={logo1}
                      alt="Avatar"
                      className="my-5 ,bg-image hover-zoom "
                      style={{ width: "150px" }}
                      fluid
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            Vaibhav Rathore
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Location</MDBTypography>
                          <MDBCardText className="text-muted">
                            Mandasur(M.P)
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Contect Details</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            vaibhavrathorema@gmail.com
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            9926503468
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Profile Details</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Github Profile</MDBTypography>
                          <MDBCardText className="text-muted">
                            <a
                              className="text-reset"
                              href="https://github.com/thevaibhavrr"
                            >
                              Git
                            </a>
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Instagram</MDBTypography>
                          <MDBCardText className="text-muted">
                            <a
                              className="text-reset"
                              href="https://www.instagram.com/the_somil_rr/"
                            >
                              Instagram
                            </a>
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      {/* </form> */}
    </section>
  );
}
