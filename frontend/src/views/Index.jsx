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

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// index page sections
import Header from "./IndexSections/Header.jsx";
import Image from "./IndexSections/Image.jsx";
import Contact from "./IndexSections/Contact.jsx";
import Thanks from "./IndexSections/Thanks.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <Header />
          <section className="section section-components">
            <Container>
              <Image />
            </Container>
          </section>
          <Contact />
          <Thanks />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
