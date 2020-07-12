import React from 'react';
import './App.css';
import {Header} from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses} from './components/IncomeExpenses';
import { TransactionList} from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div>
      <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
