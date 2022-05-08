import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

import ListAccountItem from "./ListAccountItem";
import ListTransactionsItem from "./ListTransactionsItem";

const UserAccount = (props) => {
  
  console.log("Inside User Account");
  const location = useLocation();
  const { accountId } = location.state;
  window.localStorage.setItem('accountID', JSON.stringify(accountId));
  
  const accounts = props.accounts;
  const transactions = props.transactions;
  console.log(accounts);

  const account = accounts.find((account) => account._id === accountId);
  const user_transactions = transactions.filter(
    (transaction) => transaction.accountId === accountId
  );

  console.log(user_transactions);

  console.log(account);

  return (
    <div>
      UserAccount
      <ListAccountItem account={account} key={account._id} />
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Name/ID</th>
            <th scope="col">Transaction Name</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
            {user_transactions.map((transaction) => {
              return (
                <ListTransactionsItem
                  transaction={transaction}
                  key={transaction._id}
                />
              );
            })}
          </tbody>
      </table>
      {accountId}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

export default connect(mapStateToProps, null)(UserAccount);
