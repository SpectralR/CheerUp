import React from 'react';
import { Button, Row, Container } from "reactstrap";

class Animals extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-center align-items-center">
                <p className="lead text-white"> If you want, you can choose an animal to pet, they'll like it! </p>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Button className="btn-icon btn-2" color="secondary" type="button" /* onClick= */ >
                    <span className="btn-inner--icon">
                        <i className="fas fa-dog"></i>
                    </span>
                </Button>
                <Button className="btn-icon btn-2" color="secondary" type="button" /* onClick= */ >
                    <span className="btn-inner--icon">
                        <i className="fas fa-cat"></i>
                    </span>
                </Button>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Animals;