import { Route, Routes } from "react-router-dom";
import Homepage from "../src/components/homepage/Homepage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Frames from "./components/Design";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/frames" element={<Frames />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
