let initialState = {
  accounts: [],
  transactions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "withdraw":
      return {
        ...state,
        transactions: state.transactions.push({
          _id: state.transactions.length + 1,
          accountId: action.accountId,
          type: "withdraw",
          amount: action.amount,
          name: action.name,
        }),
      };
    case "deposit":
      return {
        ...state,
        transactions: state.transactions.push({
          _id: state.transactions.length + 1,
          accountId: action.accountId,
          type: "deposit",
          amount: action.amount,
          name: action.name,
        }),
      };
    case "retrieve_accounts":
      state.accounts.push(action.payload);
      return state;
    case "retrieve_transactions":
      
      return {
        ...state,
        transactions: action.transactions,
      };
    default:
      return !state ? initialState : state;
  }
};

export default reducer;
