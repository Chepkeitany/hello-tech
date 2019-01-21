export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_TECHNOLOGY":
            // Update the technology
            return {
                ...state,
                tech: action.text
            }
        default:
            return state;
    }
}