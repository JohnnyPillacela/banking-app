import React from "react";
import { connect } from "react-redux";

import "../styles/ListTransactions.css";

function ListTransactions(props) {
  console.log(props);
  const transactions = props.transactions;
  console.log(transactions);
  return (
    <div className="transactions">
      <h3>Your Customers Transactions</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

export default connect(mapStateToProps, null)(ListTransactions);
