export const wdithdraw = (_id, accountId, type, amount, name) => {
  return {
    type: "withdraw",
    payload: {
      _id,
      accountId,
      type,
      amount,
      name,
    },
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
      },
    };
  };

export const retrieve_accounts = (accounts) => {
  return {
    type: "retrieve_accounts",
    payload: accounts    
  };
};
