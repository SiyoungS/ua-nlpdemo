import React from "react";
// import { useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import "bootstrap/dist/css/bootstrap.css";
import SpeechAdvisor from "./pages/SpeechAdvisor";
import Error from "./pages/Error";

function App() {
  // useEffect(() => {
  //   /
  // }, [])
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/speechAdvisor" element={<SpeechAdvisor />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
