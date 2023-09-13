import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modaldeleteskill({ skill_worker_id }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios
            .delete(`https://peeworld-be.vercel.app/skills/delete/${skill_worker_id}`)
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
                    fontSize: 7,
                    padding: "2px 5px",
                    fontWeight: 700,
                    marginLeft:-17
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

export default Modaldeleteskill;
