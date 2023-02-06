import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Courses from "./component/Courses/Courses";
import Error404 from "./component/Error404/Error404";
import Home from "./component/Home/Home";
import Sections from "./component/Sections/Sections";
import Students from "./component/Students/Students";
import Teachers from "./component/Teachers/Teachers";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/home", element: <Home></Home> },
    { path: "/students", element: <Students /> },
    { path: "/courses", element: <Courses /> },
    { path: "/teachers", element: <Teachers /> },
    { path: "/sections", element: <Sections /> },
    { path: "*", element: <Error404 /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
