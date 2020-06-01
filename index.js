const redux = require('redux');
const createStore = redux.createStore
const combineReducer = redux.combineReducers

console.log('from index.js');
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action
function buyCake() {
    console.log('buying cake ...');
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    console.log('buying ice cream ...');
    return {
        type: BUY_ICECREAM,
        into: 'buying icecream payload'
    }
}

//initial state 
const initialCakeState = {
    numberOfCakes: 10
}

const initialIcreCreamState = {
    numberOfIceCreme: 20
}

//Reducer functionality implementation
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIcreCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreme: state.numberOfIceCreme - 1
            }
        default:
            return state;
    }
}


const allReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

//Creating the store
const store = createStore(allReducer);
console.log('initial state', store.getState());

//Subscribe to the store with subscribe and get variable unsubscribe
const unsubscribe = store.subscribe(() => console.log('Updated State:', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

unsubscribe();