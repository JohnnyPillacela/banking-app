import React from "react";
// import axios from "axios";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import ListAccounts from "./components/ListAccounts";
import ListTransactions from "./components/ListTransactions";
import "./styles/App.css";

function App() {
  return (
    <Container className="app">
      <BrowserRouter>
        <NavBar />
        <Container>
          <h1>Welcome, Bank Manager</h1>
          {/* <ListAccounts /> */}
        </Container>
        <Routes>
          <Route path="/" exact element={<ListAccounts />} />
          <Route path="/accounts" element={<ListAccounts />} />
          <Route path="/transactions" element={<ListTransactions />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
