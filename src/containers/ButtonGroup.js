import React from "react";
import { connect } from "react-redux";
import setTechnology from "../actions";


const ButtonGroup = ({ technologies, setTechnology }) => {
    // Invoked when a button is clicked
function dispatchBtnAction(e) {
    // Get the data attribute set on the button, data-tech
    // Basically the button text
    const tech = e.target.dataset.tech;
    // store.dispatch() is how you dispatch an action in Redux
    // store.dispatch() requires an action object and nothing else
    // setTechnology is an action creator
    setTechnology(tech);
}
return (
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
}

export default connect(null, {setTechnology})(ButtonGroup);