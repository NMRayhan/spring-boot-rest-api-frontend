import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import AddTeacher from "./AddTeacher";

const Teachers = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <AddTeacher/>
        <h1 className="text-primary">Teacher page</h1>
        <div className="mt-4 row justify-content-center align-items-center">
          <div className="col-8 bordered">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Join date</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Michel Modhusudan</td>
                    <td>22-2-2022</td>
                    <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                    <td>037390570</td>
                    <td>john@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Stepen John</td>
                    <td>22-2-2022</td>
                    <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                    <td>037390570</td>
                    <td>john@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>isac newton</td>
                    <td>22-2-2022</td>
                    <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                    <td>037390570</td>
                    <td>john@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Max flanc</td>
                    <td>22-2-2022</td>
                    <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                    <td>037390570</td>
                    <td>john@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4 bordered">
            <div className="border p-4">
              <div className="text-center">
                <h3>Name: Max flanc </h3>
                <h3>join date: 22-2-22-2-2022 </h3>
                <h3>Email: max_c@gmail.com </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
