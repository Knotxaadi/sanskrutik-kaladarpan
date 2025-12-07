import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
