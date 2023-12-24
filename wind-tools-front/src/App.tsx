import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
   <Router>
          <Routes>
            <Route path="/testPage" element={<TestPage />} />
            </Routes>
            </Router>
    </>
  );
}

export default App;
