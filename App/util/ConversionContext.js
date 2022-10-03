import React, { createContext, useState } from "react";

import { api } from "./api";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});

  const setBaseCurrency = (currency) => {
    return api(`/latest?base=${currency}`)
      .then(response => {
        console.log(response);
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates)
      })
      .catch(error => {
        console.log(error)
      })
    
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates
  }

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  )
};