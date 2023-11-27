import Header from "./Layouts/Header/Header";
import React, { Suspense } from "react";
import "./App.css";
import Main from "./Layouts/MainIntro/Main";
import Footer from "./Layouts/Footer/Footer";
// import About from "./Layouts/About/About";
import Contact from "./Layouts/Contact/Contact";
const Projects = React.lazy(() => import("./Layouts/Projects/Projects"));

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <About /> */}
      <Suspense fallback={<div>Loading....</div>}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
