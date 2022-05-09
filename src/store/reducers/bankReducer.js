let initialState = {
  accounts: [],
  transactions: [],
};

const reduceBalance = (state, action) => {
  state.accounts.forEach((acc) => {
    if (acc._id === action.payload.accountId) {
      console.log(acc);
      acc.balance -= action.payload.amount;
    }
  });
  let newState = {
    accounts: state.accounts,
    transactions: state.transactions.concat(action.payload),
  };

  return newState;
};

const addBalance = (state, action) => {
  state.accounts.forEach((acc) => {
    if (acc._id === action.payload.accountId) {
      console.log(acc);
      acc.balance = parseFloat(acc.balance) + parseFloat(action.payload.amount);
    }
  });
  let newState = {
    accounts: state.accounts,
    transactions: state.transactions.concat(action.payload),
  };

  return newState;
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "withdraw":
      console.log(state);
      return reduceBalance(state, action);
    case "deposit":
      console.log(action);
      return addBalance(state, action);
    case "add_accounts":
      console.log(action);
      return { ...state, accounts: [...action.payload] };
    case "add_transactions":
      return { ...state, transactions: [...action.payload] };
    default:
      return !state ? { ...initialState } : state;
  }
};

export default reducer;
