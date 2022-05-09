import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import DepositWithdraw from "./DepositWithdraw";
import "../styles/ListAccountItem.css";

const ListAccountItem = (props) => {
  //   console.log("Each Item");
  //   console.log(props.account);
  const link = `/account/${props.account._id}`;

  const account = props.account;
  return (
    <div className="row account">
      <Card className="col-5 border-0" key={account._id}>
        <Card.Body className="card-body">
          <Card.Title className="card-title">
            <Link to={link} state={{ accountId: props.account._id }}>{account.name}</Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <b>Balance:</b> ${account.balance}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="col-7 border-0">
        <Card.Body className="card-body">
          <DepositWithdraw account={account} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListAccountItem;
