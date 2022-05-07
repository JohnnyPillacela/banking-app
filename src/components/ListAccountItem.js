import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

import '../styles/ListAccountItem.css';

const ListAccountItem = (props) => {
  console.log("Each Item");
  console.log(props.account);
  const account = props.account;
  return (
    <Card className="account" key={account._id}>
      <Card.Body>
        <Card.Title className="card-title">{account.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Balance:</b> ${account.balance}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ListAccountItem;
