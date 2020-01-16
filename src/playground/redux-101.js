import { createStore } from 'redux';

// Action generator

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ( {
    type: 'DECREMENT',
    decrementBy : decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count: count
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT': 
        return {
                count: state.count - action.decrementBy
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

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount());

// reset the count
store.dispatch(resetCount());


//decrease the count to zero
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(decrementCount());

// set Count
store.dispatch(setCount({ count: 100}));





