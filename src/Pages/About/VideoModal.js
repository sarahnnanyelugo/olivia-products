import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MainVid from "../../assets/images/vid.mp4";
import { FaPlay } from "react-icons/fa";

function VideoModal() {
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="factory-modal">
      <button className="hot-spot-btn" onClick={handleShow}>
        <FaPlay />
      </button>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            {" "}
            <video width="100%" autoPlay loop muted playsInline controls>
              <source src={MainVid} type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoModal;
