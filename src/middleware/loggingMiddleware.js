const loggingMiddleware = ({ getState, dispatch }) => next => action => {
    // pass action on to the next middleware/reducers
    console.log("%c state upon reaching middleware 👉 ", "background:purple;color:white", getState());
    next(action);

    // conditional check
    // further dispatch calls are exited here    
    // if (action.type !== "LOGGER") {
    //     return;
    // }
    // // Get DNA to know the order of parameters
    // console.log("%c Action 👉 ", "background:yellow;color:black", action);
    console.log("%c current stat of the app 👉 ", "background:yellow;color:black", getState());
    // console.log("%c dispatch 👉 ", "background:green;color:white", dispatch);
    // console.log("%c next 👉 ", "background:teal;color:white", next);
};

export default loggingMiddleware;