import React, { useReducer } from "react";
import Context from "./config";
import counterReducer, { counterStore } from "../counter";
import authReducer, { authStore } from "../auth";


const Store = props => {
  const [counterState, counterDispatch] = useReducer(counterReducer,counterStore);
  const [authState, authDispatch] = useReducer(authReducer, authStore);

  const triggerDispatchs = action => {
    const dispatchs = [counterDispatch, authDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const combinedReducers = {
    store: {
      ...counterState,
      ...authState
    },
    dispatch: action => triggerDispatchs(action)
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
