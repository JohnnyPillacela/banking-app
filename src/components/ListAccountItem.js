import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

import DepositWithdraw from "./DepositWithdraw";
import "../styles/ListAccountItem.css";

const ListAccountItem = (props) => {
  //   console.log("Each Item");
  //   console.log(props.account);
  const account = props.account;
  return (
    <div className="row account">
      <Card className="col-5 border-0" key={account._id}>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{account.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <b>Balance:</b> ${account.balance}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="col-7 border-0">
        <Card.Body className="card-body">
          <Card.Text className="card-text">
            <DepositWithdraw/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListAccountItem;
