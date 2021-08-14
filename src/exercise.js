// console.log("Hello!");
import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: []
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// function increase() {
//   return {
//     type: INCREASE,
//   }
// }
const increase = () => ({
  type: INCREASE
});

const decrease = () => ({
  type: DECREASE
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text
});

const addToLIST = (item) => ({
  type: ADD_TO_LIST,
  item
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello"));
store.dispatch(addToLIST({ id: 1, text: "Wow" }));

window.store = store;
window.unsubscribe = unsubscribe;