import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import PageTemplate from "./PageTemplate";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Design from "./components/Design";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/design" element={<Design />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
