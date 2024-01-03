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
const LazyHero = React.lazy(() => import("./component/Hero"));  

function App() {
  return (
    <>
              <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen w-full bg-slate-300">
                  <span className="loading loading-infinity loading-lg text-6xl"></span>
                </div>
              }>
              <div className="max-w-[80%]  mx-auto z-0 ">
                <LazyHero />
                <About />

                <Tools/>

                <Projects/>
              
              <Experience/>

              <Contact/>
              </div>
            </Suspense>
          }></Route>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
