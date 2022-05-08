import React from "react";
import { connect } from "react-redux";

import ListAccountItem from "./ListAccountItem";
import "../styles/ListAccounts.css";
class ListAccounts extends React.Component {
  render() {
    return (
      <div className="accounts">
        <h3>Accounts List</h3>
        <hr />
        <div className="accounts-list">
        {this.props.accounts.map((account) => {
          return (
            <ListAccountItem
              account={account}
              key={account._id}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

export default connect(mapStateToProps, null)(ListAccounts);
