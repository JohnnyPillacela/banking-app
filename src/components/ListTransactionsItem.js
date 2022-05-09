import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/ListTransactionsItem.css";

const ListTransactionsItem = (props) => {
  const transaction = props.transaction;
  const type = transaction.type;
  const color = type === "deposit" ? "deposit" : "withdraw";
  const amount =
    type === "withdraw" ? `-$${transaction.amount}` : `$${transaction.amount}`;
  const link = `/account/${transaction.accountId}`;

  const accounts = useSelector((state) => state.bank.accounts);
  const account = accounts.find(
    (account) => account._id === transaction.accountId
  );

  if (!account) {
    return (
      <tr>
        <th>Loading...</th>
        <th>Loading...</th>
        <th>Loading...</th>
      </tr>
    );
  }
  return (
    <tr className="transaction" key={transaction._id}>
      <th>
        <Link to={link} state={{ accountId: transaction.accountId }}>
          {account.name} / {transaction.accountId}
        </Link>
      </th>

      <th>{transaction.name}</th>
      <th>
        <p className={"amount " + color}>{amount}</p>
      </th>
    </tr>
  );
};

export default ListTransactionsItem;
