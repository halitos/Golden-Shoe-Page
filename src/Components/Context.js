import React from "react";

const AmountContext = React.createContext({
  amount: false,
  setAmount: () => {},
});

export default AmountContext;
