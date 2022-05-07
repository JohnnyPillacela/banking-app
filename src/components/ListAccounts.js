import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { add_accounts, add_transactions } from "../actions";

// import ListAccountItem from "./ListAccountItem";

const accountsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/accounts";
const transactionsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/transactions";
class ListAccounts extends React.Component {

  componentDidMount() {
    this.getAccounts();
  }

  async getAccounts() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(accountsAPI);
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
      this.setState({});
    } catch (error) {
      throw error;
    }
  }
   
  renderList() {
    console.log("Inside renderlist");
    console.log(this.props.accounts);

    const accountsList = this.props.accounts;
    // const accountsList = this.state.accountsList;


    return accountsList.map((account) => {
      return (
        <li className="list-group-item" key={account._id}>
          {account.name}
        </li>
      );
    });
  }

  render() {
    console.log("Inside Render");
    let accountsList = this.renderList();
    console.log("Came from renderList");
    console.log(accountsList);
    return (
      <div>
        <h3>Accounts List</h3>
        <div className="card">
          <ul className="list-group">{accountsList}</ul>
          {/* <ListAccountItem /> */}
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

export default connect(mapStateToProps, { add_accounts, add_transactions })(ListAccounts);
