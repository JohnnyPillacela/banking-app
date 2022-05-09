import React, { useSelector } from "react";
// import { Connect } from "react-redux";

export default function DepositWithdraw() { 
  // const deposit = useSelector((state) => state.bank.deposit);
  // const withdraw = useSelector((state) => state.bank.withdraw);

  // console.log(deposit);
  // console.log(withdraw);

  // const onFormSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.addPlayer(this.state.name, this.state.initiative, this.props.characterType);

  //   this.setState({ name: '', initiative: '' });
  // }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name"></label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Transaction Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount"></label>
        <input
          type="number"
          className="form-control"
          id="amount"
          placeholder="Amount"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Deposit
      </button>
      <button type="submit" className="btn btn-danger">
        Withdraw
      </button>
    </form>
  );
}
