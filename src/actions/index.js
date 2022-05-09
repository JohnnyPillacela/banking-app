export const withdraw = (_id, accountId, type, amount, name) => {
  return {
    type: "withdraw",
    payload: {
      _id,
      accountId,
      type,
      amount,
      name,
    }
  };
};

export const deposit = (_id, accountId, type, amount, name) => {
  return {
    type: "deposit",
    payload: {
      _id,
      accountId,
      type,
      amount,
      name,
    }
  };
};

export const add_accounts = (accounts) => {
  return {
    type: "add_accounts",
    payload: accounts,
  };
};

export const add_transactions = (transactions) => {
  return {
    type: "add_transactions",
    payload: transactions,
  };
};
