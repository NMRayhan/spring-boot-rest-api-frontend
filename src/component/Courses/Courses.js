import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import AddCourse from "./AddCourse";

const Courses = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <AddCourse/>
        <h1 className="text-primary">Course page</h1>
        <div className="mt-4 row justify-content-center align-items-center">
          <div className="col-8 table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Department</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Data Structure</td>
                  <td>IT depart</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Spring Boot API</td>
                  <td>Web</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bangladesh Studies</td>
                  <td>History</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Computer Fundamental</td>
                  <td>IT Depart</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 bordered">
            <div className="border p-4">
              <div className="text-center">
                <h3>Name: Computer Fundamental </h3>
                <h3>Department: IT Depart </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
