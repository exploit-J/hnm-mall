import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="main-container">
      <Navbar
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        username={username}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={
            <Login
              setAuthenticate={setAuthenticate}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
