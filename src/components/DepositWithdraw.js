import React, { useState} from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { deposit, withdraw } from "../actions";

function DepositWithdraw(props) { 
  console.log("Inside Deposit/Withdraw");
  const transactions = useSelector((state) => state.bank.transactions);
  // console.log(deposit);
  // console.log(withdraw);
  // console.log(transactions);
  const id_num = transactions.length + 1;
  const account_id = props.account._id;

  const [name, setName] = useState("");
  const [amount, setAmount] = useState();

  const onDeposit = (event) => {
    event.preventDefault();

    console.log(id_num)
    console.log(account_id)
    console.log(amount)
    console.log(name)
    console.log("deposit submitted");
    props.deposit(id_num, account_id, "deposit", amount, name);

    setName("");
    setAmount("");
  }

  const onWithdraw = (event) => {
    event.preventDefault();

    console.log(id_num)
    console.log(account_id)
    console.log(amount)
    console.log(name)
    console.log("withdraw submitted");
    props.withdraw(id_num, account_id, "withdraw", amount, name);

    setName("");
    setAmount("");
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name"></label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Transaction Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount"></label>
        <input
          type="number"
          className="form-control"
          id="amount"
          placeholder="Amount"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success" onClick={onDeposit}>
        Deposit
      </button>
      <button type="submit" className="btn btn-danger" onClick={onWithdraw}>
        Withdraw
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deposit: (_id, accountId, type, amount, name) => dispatch(deposit(_id, accountId, type, amount, name)),
    withdraw: (_id, accountId, type, amount, name) =>
      dispatch(withdraw(_id, accountId, type, amount, name)),
  };
};

export default connect(null, mapDispatchToProps)(DepositWithdraw);