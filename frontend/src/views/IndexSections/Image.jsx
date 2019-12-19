import React from 'react';
import { handleResponse } from "../../helpers";
import { API_URL } from "../../config";
import { Button, Row } from "reactstrap";

class Image extends React.Component{
    constructor() {
        super();

        this.state = {
            image: [],
            error: null
        }
    }

    getImage(){
        fetch(`${API_URL}/random`, {
            method: "GET",
            headers: {
                mode: "no-cors"
            }
        })
            .then(handleResponse)
            .then((data) => {
                this.setState({
                    image: data
                })
            })
            .catch((error) => {
               this.setState({error : error.errorMessage })
            });
    }

    render(){
        const {image, error} = this.state;

        if (error){
            return <p>Erreur: {error.message}</p>
        } else if (image.image) {
            return(
                <>
                    <Row className="row-grid justify-content-center align-items-center mt-lg image">
                        <p>{image.image}</p>
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
        )}
        return(
            <>
                <Row className="row-grid justify-content-center align-items-center mt-lg image">
                    <p>Click the button and you'll get a cheering up picture!</p>
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
        );
    }
}

export default Image;