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
import { Container } from "reactstrap";

class Thanks extends React.Component {
  render() {
    return (
      <>
        <section className="section section-nucleo-icons">
          <Container>
            <p className="lead">A big thanks to the following people! They deserve it!</p>
            {/* <p><strong>Robin Hood</strong> for the logo.</p> */}
            <p><strong><a href="https://www.creative-tim.com?ref=adsr-footer" target='_blank' rel="noopener noreferrer">Creative Tim</a></strong> for this wonderfull frontend template.</p>
          </Container>
        </section>
      </>
    );
  }
}

export default Thanks;
