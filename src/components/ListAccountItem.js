import React from "react";
import { connect } from "react-redux";

function ListAccountItem(props) {
    // const accounts = useSelector((state) => state.accounts);
  return props.accounts.map((account) => {
    return (
      <li className="list-group-item" key={account._id}>
        {account.name}
      </li>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
  };
};

export default connect(mapStateToProps, null)(ListAccountItem);
