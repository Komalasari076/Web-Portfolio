import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function PageTemplate() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default PageTemplate;
