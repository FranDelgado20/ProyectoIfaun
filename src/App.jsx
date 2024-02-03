import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import PantallaDeCarga from "./components/PantallaDeCarga";
import RoutesViews from "./routes/RoutesViews";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1800, once: true });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className={isLoading ? "d-none" : ""}>
          <NavbarComp />
        </div>
        <main className="mainSection">
          {isLoading ? (
            <PantallaDeCarga />
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <RoutesViews />
            </Suspense>
          )}
        </main>
        <div className={isLoading ? "d-none" : ""}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
