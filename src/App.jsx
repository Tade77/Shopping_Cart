import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
