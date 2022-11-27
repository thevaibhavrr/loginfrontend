import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBTextArea,
  MDBValidationItem,
} from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
    <MDBValidation
      noValidate 
      id="form"
      className="text-center"
      style={{ width: "100%", maxWidth: "300px" }}
    >
      <h2>Contact us</h2>

      <MDBValidationItem invalid feedback="Please provide your name.">
        <MDBInput label="Name" v-model="name" wrapperClass="mb-4" required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback="Please provide your email.">
        <MDBInput
          type="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
          required
        />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback="Please provide mail subject.">
        <MDBInput
          label="Subject"
          v-model="subject"
          wrapperClass="mb-4"
          required
        />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback="Please provide a message text.">
        <MDBTextArea wrapperClass="mb-4" label="Message" required />
      </MDBValidationItem>

     

      <MDBBtn type="submit" color="primary" block className="my-4">
        Send
      </MDBBtn>
    </MDBValidation>
    </div>
  );
}
