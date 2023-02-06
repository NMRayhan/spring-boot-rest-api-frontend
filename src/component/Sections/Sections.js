import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";

const Sections = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <div className="d-flex">
          <button className="btn btn-success">Add Section</button>
        </div>
        <h1 className="text-primary">Sections page</h1>
        <div className="mt-4 row justify-content-center align-items-center">
          <div className="col-8 bordered">
            <table className="table table-hover">
              <thead>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">Session</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>A</td>
                  <td>2022</td>
                  <td>2021-21</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>B</td>
                  <td>2022</td>
                  <td>2021-21</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>C</td>
                  <td>2022</td>
                  <td>2021-21</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>D</td>
                  <td>2022</td>
                  <td>2021-21</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 bordered">
            <div className="border p-4">
              <div className="text-center">
                <h3>Name: A </h3>
                <h3>Year: 2022 </h3>
                <h3>Session: 2022-23 </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sections;
