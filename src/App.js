import { Route, Routes } from "react-router-dom";
import Login from "./containers/Pages/Login";
import Messages from "./containers/Pages/Messages";
import Register from "./containers/Pages/Register";
import PrivateRoute from "./containers/Features/PrivateRoute";
import CheckToken from "./containers/Features/CheckToken";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <CheckToken>
            <Login />
          </CheckToken>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
