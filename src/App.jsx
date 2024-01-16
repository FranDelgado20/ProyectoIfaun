import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import RoutesViews from "./routes/RoutesViews";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <NavbarComp />
          <main className="main-content">
            <RoutesViews/>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
