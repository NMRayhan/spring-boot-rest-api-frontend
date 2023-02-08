import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import AddStudent from "./AddStudent";

const Students = () => {
  // useEffect(() => {
  //   fetch("http://localhost:8080/students/getallstudent")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <Header></Header>
      <Container>
        <AddStudent />
        <h1 className="text-primary">Students List</h1>
        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-8 table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Admission</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Stepen John</td>
                  <td>2022</td>
                  <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                  <td>037390570</td>
                  <td>john@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Stepen John</td>
                  <td>2022</td>
                  <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                  <td>037390570</td>
                  <td>john@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Stepen John</td>
                  <td>2022</td>
                  <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                  <td>037390570</td>
                  <td>john@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Stepen John</td>
                  <td>2022</td>
                  <td>Hopking Str, road-3, hourse-5, Dhaka</td>
                  <td>037390570</td>
                  <td>john@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 bordered">
            <div className="border p-4">
              <div className="text-center">
                <h3>Name: Stepen John </h3>
                <h3>Phone: 037390570 </h3>
                <h3>Email: john@gmail.com </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Students;
