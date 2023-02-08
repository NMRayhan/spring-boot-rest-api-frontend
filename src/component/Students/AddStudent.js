import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddStudent = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, address, year, phone, email };
    fetch('http://localhost:8080/students/add',{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      alert("Data save")
      handleClose(true);
    })
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Student in Database</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name={name}
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Admission</Form.Label>
              <Form.Control
                name={year}
                type="number"
                placeholder="Admission"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name={address}
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name={phone}
                type="number"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name={email}
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <div className="p-1">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
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

export default AddStudent;
