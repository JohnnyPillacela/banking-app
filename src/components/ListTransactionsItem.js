import React from "react";
import { Card } from "react-bootstrap";

import "../styles/ListTransactionsItem.css";

const ListTransactionsItem = (props) => {
  //   console.log("Each Item");
  //   console.log(props.transaction);
  const transaction = props.transaction;
  return (
    <div className="row transaction">
      <Card className="col-5 border-0" key={transaction._id}>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{transaction.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <b>Amount:</b> ${transaction.amount}
            <b>Type:</b> ${transaction.type}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="col-7 border-0">
        <Card.Body className="card-body">
          <Card.Text className="card-text">
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListTransactionsItem;
