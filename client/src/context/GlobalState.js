import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { v4 as uuidV4 } from 'uuid';
import axios from 'axios';
import { stat } from 'fs';
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'GET_TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            const res = await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (err) {
            dispatch({
            type: 'GET_TRANSACTIONS_ERROR',
            payload: err.response.data.error
        })
        }
    }

    async function addTransaction(text, amount) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            } 
        }
        try {
            const newTransaction = {
                id: uuidV4(),
                text,
                amount: +amount
            }
            
            const res = await axios.post(`/api/v1/transactions`, newTransaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
            type: 'GET_TRANSACTIONS_ERROR',
            payload: err.response.data.error
        })
        }

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}