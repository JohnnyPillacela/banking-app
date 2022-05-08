import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { add_accounts, add_transactions } from "../actions";

import ListAccountItem from "./ListAccountItem";
import "../styles/ListAccounts.css";
import { Container } from "react-bootstrap";

const accountsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/accounts";
const transactionsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/transactions";
class ListAccounts extends React.Component {
  state = {
    accounts: [],
  };
  constructor(props) {
    super(props);
    this.getAccounts();
  }
  componentDidMount() {
    this.setState({ accounts: this.props.accounts });
  }

  async getAccounts() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(accountsAPI);
      console.log(this.props);
      this.props.add_accounts(response.data);
      this.setState({});
    } catch (error) {
      throw error;
    }
  }

  async getTransactions() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(transactionsAPI);
      this.props.add_transactions(response.data);
      // this.setState({});
    } catch (error) {
      throw error;
    }
  }

  render() {
    // console.log("Inside Render");
    // console.log(this.props);
    //let accountsList = this.renderList();
    return (
      <div className="accounts">
        <h3>Accounts List</h3>
        <hr />
        <div className="accounts-list">
        {this.props.accounts.map((account) => {
          return (
            <ListAccountItem
              account={account}
              key={account._id}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_accounts: (accounts) => dispatch(add_accounts(accounts)),
    add_transactions: (transactions) =>
      dispatch(add_transactions(transactions)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListAccounts);
