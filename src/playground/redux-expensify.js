import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
// const removeExpense = () => ({
//     type: 'REMOVE_EXPENSE'
// });
// EDIT_EXPENSE
// const editExpense = () => ({
//     type: 'ADD_EXPENSE'
// });
// SET_TEXT_FILTER
// const addExpense = () => ({
//     type: 'ADD_EXPENSE'
// });
// SORT_BY_DATE
// const addExpense = () => ({
//     type: 'ADD_EXPENSE'
// });
// SORT_BY_AMOUNT
// const addExpense = () => ({
//     type: 'ADD_EXPENSE'
// });
// SET_START_DATE
// const addExpense = () => ({
//     type: 'ADD_EXPENSE'
// });
// SET_END_DATE
// const addExpense = () => ({
//     type: 'ADD_EXPENSE'
// });

// Expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
               ...state, 
               action.expense
            ];
        default:
            return state;
    }
};

// Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

const demoState = {
    expenses: [{
        id: '0294809fsf',
        description: 'nft',
        note: 'this is nft rent',
        amount: 45000,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }

};