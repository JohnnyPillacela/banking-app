import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { retrieve_accounts } from "../actions";

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
      const response = await axios.get(accountsAPI);
      const accountsData = response.data;
      console.log("Inside of getAccounts");
      console.log(accountsData);
      accountsData.forEach((account) => {
        this.props.retrieve_accounts(account);
      });
    } catch (error) {
      throw error;
    }
  }
  
  //  uses async await
  getTransactions = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(transactionsAPI);
        const data = response.data;
        dispatch({
          type: "retrieve_transactions",
          payload: data,
        });
      } catch (error) {
        throw error;
      }
    };
  };

  renderList() {
    console.log("Inside renderlist");
    console.log(this.props.accounts);

    const accountsList = this.props.accounts;

    return accountsList.map((account) => {
      return (
        <li className="list-group-item" key={account._id}>
          {account.name}
        </li>
      );
    });
  }

  render() {
    let accountsList = this.renderList();

    return (
      <div className="card">
        <h3>Accounts List</h3>
        <ul className="list-group">{accountsList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions
  };
};

export default connect(mapStateToProps, { retrieve_accounts })(ListAccounts);
