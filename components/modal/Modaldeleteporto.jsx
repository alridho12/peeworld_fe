import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modaldeleteporto({ portofolio_id }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios
            .delete(`https://peeworld-be.vercel.app/portofolio/delete/${portofolio_id}`)
            .then((res) => {
                console.log(res);
                setShow(false);
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
                setShow(false);
            });
    };

    return (
        <>
            <Button
                variant="outline-secondary"
                onClick={handleShow}
                id="delete-skill"
                style={{
                    display: "flex",
                    fontSize: 20,
                    padding: "2px 10px",
                    fontWeight: 700,

                }}
            >
                X
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete skill</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <h3>Are you sure delete this skill?</h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default Modaldeleteporto;
