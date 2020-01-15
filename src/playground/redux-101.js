import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy =  typeof action.incrementBy ===  'number' ?  action.incrementBy : 1
        return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 0    
        return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
              count: action.count
            };
        default:
            return state;
    }
});

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions
// increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// reset the count
store.dispatch({
    type: 'RESET'
});


//decrease the count to zero
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 'ten'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 100
});





