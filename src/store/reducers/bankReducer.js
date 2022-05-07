const initialState = {
accounts: [],
  transactions: []
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
        return {
            accounts: action.accounts,
            transactions: action.transactions
        }
    default:
      return state;
  }
};

export default reducer;
