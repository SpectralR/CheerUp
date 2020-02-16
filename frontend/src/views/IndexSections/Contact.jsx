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

import ContactModal from "./ContactModal.jsx";


class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="section section-nucleo-icons">
          <Container className="py-md">
            <Row className="justify-content-center align-items-center">
              <p className="lead">
                If you want, or need, to talk, or just want to submit some images, you can contact my by clicking the button below.
                I'm not a psychologist, but I can hear you out if it helps you to talk with someone!
              </p>
              <ContactModal/>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Contact;
