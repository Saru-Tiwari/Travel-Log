import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/layout";
import ShareLog from "./components/pages/Sharelogpage";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="share" element={<ShareLog />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
