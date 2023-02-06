import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddCourse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Course
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Course in Database</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control type="number" placeholder="Department" />
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

export default AddCourse;
