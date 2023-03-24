import "./App.css";
import React from "react";
// import Speedtyping2 from "../src/speedTyping/Speedtyping2";
// import Useeffect1 from "./useEffect/Useeffect1";
// import Speedtyping1 from "../src/speedTyping/Speedtyping1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./NewProject/PrivateRoute/PrivateRoute";
import Home from "./NewProject/AfterLogin/Home";
import Products from "./NewProject/AfterLogin/Products";
import Login from "./NewProject/LoginPage/Login";

function App() {
  return (
    <div className="App">
      {/* <Speedtyping1 /> */}
      {/* <Speedtyping2 /> */}
      {/* <Useeffect1 /> */}

      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Products />} path="/products" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
