import React from "react";
import store from "./store";
import setTechnology from "./actions";


const ButtonGroup = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button
              data-tech={tech}
              key={`btn-${i}`}
              className="hello-btn"
              onClick={dispatchBtnAction}
              >
              {tech}
              </button>
        ))}
    </div>
)

// Invoked when a button is clicked
function dispatchBtnAction(e) {
    // Get the data attribute set on the button, data-tech
    // Basically the button text
    const tech = e.target.dataset.tech;
    // store.dispatch() is how you dispatch an action in Redux
    // store.dispatch() requires an action object and nothing else
    // setTechnology is an action creator
    store.dispatch(setTechnology(tech));
}

export default ButtonGroup;