import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recommended from "./components/Recommended";

function App() {
  return (
    <Routes>
      {/* <Route path="login" element={<Login />} /> */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
