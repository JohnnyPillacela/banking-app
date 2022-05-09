import React from "react";
import { useLocation } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import ListAccountItem from "./ListAccountItem";
import ListTransactionsItem from "./ListTransactionsItem";

const UserAccount = (props) => {
  console.log("Inside User Account");
  const accounts = useSelector((state) => state.bank.accounts);
  const transactions = useSelector((state) => state.bank.transactions);
  // console.log(accounts);
  // console.log(transactions);

  const location = useLocation();
  // let accountId = useParams().accountId; 
  let accountId = 0;
  // console.log(location.pathname.split("/"));
  if (!location.state) {
    accountId = location.pathname.split("/")[2];
  } else {
    accountId = location.state.accountId; 
  }
  console.log(accountId);
  // if (!accountId) {
  //   // return;
  //   return <div>Loading...</div>;
  // }
  // console.log(accountId);

  const account = accounts.find((account) => account._id === accountId);
  const user_transactions = transactions.filter(
    (transaction) => transaction.accountId === accountId
  );

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>User Account for {account.name}</h3>
      <ListAccountItem account={account} key={account._id} />
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Name / ID</th>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

export default connect(mapStateToProps)(UserAccount);
