export const counterStore = {
    counter: 0
};

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";

const counterReducer = (state = counterStore, action) => {
switch (action.type) {
    case COUNTER_INCREMENT:
    return {
        ...state,
        counter: state.counter + 1
    };
    case COUNTER_DECREMENT:
    return {
        ...state,
        counter: state.counter - 1
    };
    default:
    return state;
}
};

export const IncrementCounter = () => {
return {
    type: COUNTER_INCREMENT
};
};

export const DecrementCounter = () => {
return {
    type: COUNTER_DECREMENT
};
};

  export default counterReducer;
