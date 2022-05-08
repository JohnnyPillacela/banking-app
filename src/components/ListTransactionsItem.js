import React from "react";
import { Card } from "react-bootstrap";

import "../styles/ListTransactionsItem.css";

const ListTransactionsItem = (props) => {
  const transaction = props.transaction;
  return (
    <tr className="transaction" key={transaction._id}>
        <th>{transaction.accountId}</th>
        <th>{transaction.name}</th>
        <th>{transaction.type}</th>
    </tr>
  );
};

export default ListTransactionsItem;
