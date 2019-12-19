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

class ContactModal extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultModal: false,
            isBoxVisible: false,
            email: "",
            message: "",
            image: ""
        };
    }


    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    toggleBox = () =>{
        this.setState(prevState => ({
            isBoxVisible: !prevState.isBoxVisible
        }));
    };

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            email: event.target.email.value,
            message: event.target.message.value,
            image: ""
        });
    };


    render() {
        const { isBoxVisible } = this.state;
        return (
            <>
            <Button className="btn-icon" color="secondary" size="lg" type="button"
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
                            <Form role="form" onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" type="email" required name="email"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-single-copy-04"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Your message" type="textarea" rows="10" name="message"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="custom-control custom-checkbox mb-3">
                                    <input
                                        className="custom-control-input"
                                        id="customCheck1"
                                        type="checkbox"
                                        onChange={this.toggleBox}
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Submit a picture
                                    </label>
                                </FormGroup>
                                <FormGroup className={`box ${isBoxVisible ? "" : "d-none"}`}>
                                    <label > Picture
                                    <Input type="file" name="file" id="upload" />
                                    </label>
                                </FormGroup>
                                <div className="text-center">
                                    <Button
                                        className="my-4 btn-icon"
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