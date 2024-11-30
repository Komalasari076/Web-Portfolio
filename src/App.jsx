import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import PageTemplate from "./PageTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Homepage />} />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
