import React from "react";
import { Card } from "react-bootstrap";

import "../styles/ListTransactionsItem.css";

const ListTransactionsItem = (props) => {
  const transaction = props.transaction;
  const type = transaction.type;
  const color = type === "deposit" ? "deposit" : "withdraw";
  const amount = type === 'withdraw' ? `-$${transaction.amount}` : `$${transaction.amount}`;
  return (
    <tr className="transaction" key={transaction._id}>
      <th>{transaction.accountId}</th>
      <th>{transaction.name}</th>
      <th>
        <p className={"amount " + color}>
          {amount}
        </p>
      </th>
    </tr>
  );
};

export default ListTransactionsItem;
