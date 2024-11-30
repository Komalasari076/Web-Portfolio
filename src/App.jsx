import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import PageTemplate from "./PageTemplate";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About/>} />
          
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
