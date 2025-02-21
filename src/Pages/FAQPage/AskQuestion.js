import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaArrowRight } from "react-icons/fa6";

function AskQuestion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=" d-flex question-btn  box-1" onClick={handleShow}>
        <p style={{ flexGrow: "1" }}>I've got a question</p>
        <span>
          <FaArrowRight className="icon" />
        </span>
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Kindly send us your question</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="question-body">
            {" "}
            <input placeholder="Type your question here" autoFocus />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="act-btn1">
            Close
          </Button>
          <Button onClick={handleClose} className="act-btn">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AskQuestion;
