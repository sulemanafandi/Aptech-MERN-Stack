import React from "react";
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid d-flex justify-content-center align-items-center gap-5 flex-wrap pt-5">

            <FetchData />
          </div>

    </>
  );
}

export default App;
