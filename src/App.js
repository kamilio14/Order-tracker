import React from "react";
import { PostRequest } from "./PostRequest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderDetail from "./Components/Order-Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostRequest />} />
          <Route path="/:id" element={<OrderDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
