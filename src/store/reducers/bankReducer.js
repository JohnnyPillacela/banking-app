let initialState = {
  accounts: [],
  transactions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "withdraw":
      console.log(action);
      return {...state, transactions: state.transactions.concat(action.payload)};
    case "deposit":
      console.log(action);
      return {...state, transactions: state.transactions.concat(action.payload)};
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
