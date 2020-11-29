import { combineReducers } from 'redux';

const defaultState = {
    h: 0,
    e: 0,
    l1: 0,
    l2: 0,
    o: 0
}

function hReducer(state = defaultState.h, action) {
    console.log('state', state);
    switch (action.type) {
        case 'CHANGE_H':
        return state + 1;
        default:
        return state;
    }
}

function eReducer(state = defaultState.e, action) {
    console.log('state', state);
    switch (action.type) {
        case 'CHANGE_E':
        return state + 1;
        default:
        return state;
    }
}

function l1Reducer(state = defaultState.l1, action) {
    console.log('state', state);
    switch (action.type) {
        case 'CHANGE_L1':
        return state + 1;
        default:
        return state;
    }
}

function l2Reducer(state = defaultState.l2, action) {
    console.log('state', state);
    switch (action.type) {
        case 'CHANGE_L2':
        return state + 1;
        default:
        return state;
    }
}

function oReducer(state = defaultState.o, action) {
    console.log('state', state);
    switch (action.type) {
        case 'CHANGE_O':
        return state + 1;
        default:
        return state;
    }
}

const rootReducer = combineReducers({
    h: hReducer,
    e: eReducer,
    l1: l1Reducer,
    l2: l2Reducer,
    o: oReducer,
});
   
export default rootReducer;