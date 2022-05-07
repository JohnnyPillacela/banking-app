let initialState = {
  accounts: [],
  transactions: [],
  accountsAdded: false,
  transactionsAdded: false
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
    case "add_accounts":
      if (!state.accountsAdded) {
        state.accounts.push(...action.payload);
        state.accountsAdded = true;
      }
      return state;
    case "add_transactions":
      if (!state.transactionsAdded) {
        state.accounts.push(...action.payload);
        state.transactionsAdded = true;
      }
      return state;
    default:
      return !state ? initialState : {...state};
  }
};

export default reducer;
