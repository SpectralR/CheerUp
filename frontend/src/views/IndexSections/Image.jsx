import React from 'react';
import { Button, Row } from "reactstrap";

class Image extends React.Component{
    constructor() {
        super();

        this.state = {
            image: 0,
            hide: true
        }
    }

    getImage(){
        let min = 1,
            max = 5;

        this.setState({
            image: process.env.PUBLIC_URL + 'images/image-' + Math.floor(Math.random() * (max - min + 1)) + min + '.jpg',
            hide: false
        })
    }

    render(){
        const {image, hide} = this.state;

        if (!hide){
            return(
                <>
                    <Row className="row-grid justify-content-center align-items-center mt-lg image">
                        <img src={image} alt={image}/>
                    </Row>
                    <Row className="row-grid justify-content-center">
                        <Button onClick={() => this.getImage()} className="btn-icon btn-3" color="primary" type="button">
                            <span className="btn-inner--icon">
                                <i className="ni ni-image" />
                            </span>
                            <span className="btn-inner--text">Get an image</span>
                        </Button>
                    </Row>
                </>
            )        
        } else {
            return(
                <>
                    <Row className="row-grid justify-content-center align-items-center mt-lg image">
                    </Row>
                    <Row className="row-grid justify-content-center align-items-center mt-lg image">
                        <p>Click the button for a cheerful picture!</p>
                    </Row>
                    <Row className="row-grid justify-content-center">
                        <Button onClick={() => this.getImage()} className="btn-icon btn-3" color="primary" type="button">
                            <span className="btn-inner--icon">
                                <i className="ni ni-image" />
                            </span>
                            <span className="btn-inner--text">Get an image</span>
                        </Button>
                    </Row>
                </>
            )
        }
    }
}

export default Image;