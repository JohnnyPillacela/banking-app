import React, { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { add_accounts, add_transactions } from "./actions";
import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import ListAccounts from "./components/ListAccounts";
import ListTransactions from "./components/ListTransactions";
import UserAccount from "./components/UserAccount";
import "./styles/App.css";

const accountsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/accounts";
const transactionsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/transactions";

class App extends React.Component {
  constructor(props) {
    console.log("Inside APP");
    super(props);
    this.getAccounts();
    this.getTransactions();
  }

  async getAccounts() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(accountsAPI);
      this.props.add_accounts(response.data);
    } catch (error) {
      throw error;
    }
  }

  async getTransactions() {
    try {
      console.log("Inside of getTransactions");
      const response = await axios.get(transactionsAPI);
      this.props.add_transactions(response.data);
    } catch (error) {
      throw error;
    }
  }

  render() {
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
            <Route path="/account/:accountId" element={<UserAccount />} />
          </Routes>
        </BrowserRouter>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_accounts: (accounts) => dispatch(add_accounts(accounts)),
    add_transactions: (transactions) =>
      dispatch(add_transactions(transactions)),
  };
};

export default connect(null, mapDispatchToProps)(App);
