import { createStore, combineReducers} from 'redux';
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
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
console.log(store.getState());
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