import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions, loading, getTransactions, error } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction}></Transaction>
                ))}
            </ul>
        </React.Fragment>
    )
}
