import React from "react";
import { Link } from "react-router-dom";

import "../styles/ListTransactionsItem.css";

const ListTransactionsItem = (props) => {
  const transaction = props.transaction;
  const type = transaction.type;
  const color = type === "deposit" ? "deposit" : "withdraw";
  const amount =
    type === "withdraw" ? `-$${transaction.amount}` : `$${transaction.amount}`;
  const link = `/account/${transaction.accountId}`;

  return (
    <tr className="transaction" key={transaction._id}>
      <th>
        <Link
          to={link}
          state={{ from: "/transactions", accountId: transaction.accountId }}
        >
          {transaction.accountId}
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