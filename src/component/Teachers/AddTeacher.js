import { Button, Modal } from "bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const AddTeacher = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Section
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Session in Database</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Section Name</Form.Label>
              <Form.Control type="text" placeholder="Section Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" placeholder="Year" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Session</Form.Label>
              <Form.Control type="number" placeholder="Session" />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <div className="p-1">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
              <div className="p-1">
                <Button variant="danger" type="reset">
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTeacher;
