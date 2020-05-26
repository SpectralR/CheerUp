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
    InputGroup,
    Modal,
} from "reactstrap";
import {API_URL} from "../../config";

class ImageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultModal: false,
            imageUrl: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    render() {
        return (
            <>
            <Button className="btn-icon" color="primary" size="lg" type="button"
                onClick={() => this.toggleModal("formModal")}>
                <span className="btn-inner--icon"><i className="ni ni-email-83"></i></span>
                <span className="btn-inner--text">Send Image</span>
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
                                <p>Fill in this form to send me your image!</p>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form" onSubmit={this.handleUploadImage}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <Input type="file" required name="image" />
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

export default ImageModal;