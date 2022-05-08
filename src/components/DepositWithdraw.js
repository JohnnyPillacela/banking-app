import React from "react";
import { Connect } from "react-redux";

export default function DepositWithdraw() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"></label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Transaction Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1"></label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
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
