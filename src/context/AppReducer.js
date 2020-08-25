export default (state, { type, payload }) => {
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };

    default:
      return state;
  }
};
