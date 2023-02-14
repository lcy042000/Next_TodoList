import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todo from "./todo";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };

    if (state.count) nextState.count = state.count;
    return nextState;
  }

  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");

//     return composeWithDevTools(applyMiddleware(...middleware));
//   }

//   return applyMiddleware(...middleware);
// };

const initStore = () => {
  return configureStore({ reducer, devTools: true });
};

export const wrapper = createWrapper(initStore);
