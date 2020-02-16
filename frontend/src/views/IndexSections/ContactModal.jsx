import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
} from "reactstrap";
import {API_URL} from "../../config";

class ContactModal extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultModal: false,
            email: "",
            message: "",
        };
    }


    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    onImageChange(event) {
        this.setState({image: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(`${API_URL}/mail`,{
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json', },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
          .then((result) =>{
            this.toggleModal("formModal");
          })
    };

    render() {
        return (
            <>
            <Button className="btn-icon" color="primary" size="lg" type="button"
                onClick={() => this.toggleModal("formModal")}>
                <span className="btn-inner--icon"><i className="ni ni-email-83"></i></span>
                <span className="btn-inner--text">Contact me</span>
            </Button>
            <Modal
                className="modal-dialog-centered"
                size="sm"
                isOpen={this.state.formModal}
                toggle={() => this.toggleModal("formModal")}
            >
                <div className="modal-body p-0">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent">
                            <div className="text-muted text-center mt-2 mb-3">
                                <p>Fill in this form to send me what you want!</p>
                                <p>Your e-mail adress is used to answer you!</p>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form" onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" type="email" required name="email" onChange={this.onEmailChange.bind(this)}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-single-copy-04"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Your message" type="textarea" rows="10" name="message" onChange={this.onMessageChange.bind(this)}/>
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                    <Button
                                        className="my-4 btn-icon"
                                        id="btn-send-message"
                                        color="primary"
                                        type="submit"
                                    >
                                        <span className="btn-inner--icon"><i className="ni ni-send"></i></span>
                                        <span className="btn-inner--text">Send</span>
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </Modal>
            </>
        );
    }
}

export default ContactModal;