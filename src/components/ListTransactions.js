import React from "react";
import { connect } from "react-redux";

import ListTransactionsItem from "./ListTransactionsItem";
import "../styles/ListTransactions.css";

function ListTransactions(props) {
  console.log("Inside Transaction Component");
  console.log(props);
  const transactions = props.transactions;
  console.log(transactions);
  return (
    <div className="transactions">
      <h3>Your Customers Transactions</h3>
      <hr />
      <div className="accounts-list">
        {props.transactions.map((transaction) => {
          return (
            <ListTransactionsItem
              transaction={transaction}
              key={transaction._id}
            />
          );
        })}
      </div>
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
