const loggingMiddleware = ({ getState, dispatch }) => next => action => {
    // pass action on to the next middleware/reducers
    next(action);

    // conditional check
    // further dispatch calls are exited here    
    if (action.type !== "LOGGER") {
        return;
    }
    // // Get DNA to know the order of parameters
    // console.log("%c Action 👉 ", "background:yellow;color:black", action);
    console.log("%c getState 👉 ", "background:purple;color:white", getState());
    // console.log("%c dispatch 👉 ", "background:green;color:white", dispatch);
    // console.log("%c next 👉 ", "background:teal;color:white", next);

    // dispatch call
    dispatch({
        type: "TEST_DISPATCH",
        payload: {}
    })
};

export default loggingMiddleware;