import React from 'react';

import Navigation from './config/Navigation';

import { api } from './util/api';

api("/latest?base=USD")
  .then(res => console.log(res))
  .catch(err => console.log("err", err));

export default function App()
 {
  return (
    <Navigation />
  )
};