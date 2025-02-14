import React, { Suspense, useEffect, useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Tools from "./component/Tools";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Aos from "aos";

const LazyHero = React.lazy(() => import("./component/Hero"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 6000,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen w-full bg-nav-color">
                  <span className="loading loading-infinity loading-lg text-6xl"></span>
                </div>
              }
            >
              <div className="max-w-[80%]  mx-auto z-0 sm:max-w-[95%] ">
                <LazyHero />
                <About />
                <Projects />
                <Experience />

                <Tools />

                <Contact />
              </div>
            </Suspense>
          }
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
