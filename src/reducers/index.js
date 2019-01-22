export default (state, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY":
            // Update the technology
            // Use the ES6 spread operator ...
            // However, the tech field is updated
            // with what comes from action.text
            return {
                ...state,
                tech: action.tech
            };
        default:
            return state;
    }
}