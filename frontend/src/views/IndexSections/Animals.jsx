import React from 'react';
import { Button, Row, Container, CardBody, Card } from "reactstrap";
import Cat from '../../assets/img/icons/common/cat.png';
import Dog from '../../assets/img/icons/common/dog.png';
import Fox from '../../assets/img/icons/common/fox.png';
import Unicorn from '../../assets/img/icons/common/unicorn.png';
import FoxSvg from './animals/Fox';

class Animals extends React.Component {
  constructor() {
    super();
    this.state = {
        divCat: "hidden",
        divDog: "hidden",
        divFox: "hidden",
        divUnicorn: "hidden"
    }
}

  animalChoice = param => e =>{
    let animal = e.target.id;
    switch (animal){
      case "cat":
        this.setState({
          divCat: "shown",
          divDog: "hidden",
          divFox: "hidden",
          divUnicorn: "hidden"
        });
        break;
      case "dog":
        this.setState({
          divCat: "hidden",
          divDog: "shown",
          divFox: "hidden",
          divUnicorn: "hidden"
        });
        break;
      case "fox":
        this.setState({
          divCat: "hidden",
          divDog: "hidden",
          divFox: "shown",
          divUnicorn: "hidden"
        });
        break;
      case "unicorn":
        this.setState({
          divCat: "hidden",
          divDog: "hidden",
          divFox: "hidden",
          divUnicorn: "shown"
        });
        break;
    }
  }

  render() {
    return (
      <>
        <section className="section section-shaped animals">
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
                <Button className="btn-icon btn-2" color="secondary" type="button" title="Dog">
                    <span className="btn-inner--icon">
                        <img src={Dog} alt="dog" id="dog" onClick={this.animalChoice(this)} />
                    </span>
                </Button>
                <Button className="btn-icon btn-2 cat" color="secondary" type="button" title="Cat">
                    <span className="btn-inner--icon">
                        <img src={Cat} alt="cat" id="cat" onClick={this.animalChoice(this)} />
                    </span>
                </Button>
                <Button className="btn-icon btn-2" color="secondary" type="button" title="Fox">
                    <span className="btn-inner--icon">
                        <img src={Fox} alt="fox" id="fox" onClick={this.animalChoice(this)} />
                    </span>
                </Button>
                <Button className="btn-icon btn-2" color="secondary" type="button" title="Unicorn">
                    <span className="btn-inner--icon">
                        <img src={Unicorn} alt="unicorn" id="unicorn"  onClick={this.animalChoice(this)} />
                    </span>
                </Button>
            </Row>
            <Row className="justify-content-center">
              <div className={this.state.divDog}>
                <Card>
                  <CardBody>
                    {/* svg */}
                  </CardBody>
                </Card>
              </div>
              <div className={this.state.divCat}>
                <Card>
                  <CardBody>
                    <p>I'm a cat</p>
                  </CardBody>
                </Card>
              </div>
              <div className={this.state.divFox}>
                <div className="fox">
                  <FoxSvg />
                </div>
              </div>
              <div className={this.state.divUnicorn}>
                <Card>
                  <CardBody>
                    <p>i'm a unicorn</p>
                  </CardBody>
                </Card>
              </div>
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