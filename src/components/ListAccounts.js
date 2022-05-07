import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const accountsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/accounts";
const transactionsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/transactions";
class ListAccounts extends React.Component {
  //  usses promises
  getAccounts = () => {
    return (dispatch) => {
      return axios
        .get(accountsAPI)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          dispatch({
            type: "retrieve_accounts",
            payload: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    };
  };

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

  render() {
    return;
    <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps)(ListAccounts);
