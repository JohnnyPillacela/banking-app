import React from "react";
import { Connect } from "react-redux";

export default function DepositWithdraw() {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Transaction Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"></label>
        <input
          type="number"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Amount"
        />
      </div>
      <button type="submit" class="btn btn-success">
        Deposit
      </button>
      <button type="submit" class="btn btn-danger">
        Withdraw
      </button>
    </form>
  );
}
