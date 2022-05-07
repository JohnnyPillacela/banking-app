import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const ListAccountItem = (props) => {
  console.log("Each Item");
  console.log(props.account);
  const account = props.account;
  return (
    <Card style={{ width: "18rem" }} key={account._id}>
      <Card.Body>
        <Card.Title>{account.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Balance:</b> {account.balance}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
  };
};

export default connect(null, null)(ListAccountItem);
