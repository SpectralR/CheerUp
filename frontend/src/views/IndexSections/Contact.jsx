/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

// import ContactModal from "./ContactModal.jsx";

class Contact extends React.Component {
  constructor(){
      super();
      this.emailRef = React.createRef();
  }

  componentDidMount(){
    let email = "bW9jfmxpYW1nKmV0aXNiZXd+cHVyZWVoYwo=",
        string = atob(email),
        decodedEmail = string.replace('*','@').replace(/~/g, '.').split("").reverse().join(""),
        emailField = this.emailRef.current;

    emailField.href = "mailto: " + decodedEmail;
    emailField.innerHTML = decodedEmail;
  }


  render() {
    return (
      <>
        <section className="section section-nucleo-icons">
          <Container className="py-md">
            <Row className="justify-content-center align-items-center">
              <p className="lead">
                If you want, or need, to talk, or just want to submit some images, you can contact me by clicking the button below.
                I'm not a psychologist, but I can hear you out if it helps you to talk with someone!
              </p>
              <p>
                To contact me, please use this email adresse : 
                <a href="" id="emailField" ref={this.emailRef}></a>
              </p>
              {/* <ContactModal/> */}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Contact;
