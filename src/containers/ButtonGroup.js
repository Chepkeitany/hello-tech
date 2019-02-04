import React from "react";
import { connect } from "react-redux";
import setTechnology from "../actions";


const ButtonGroup = ({ technologies, setTechnology }) => {
    // Invoked when a button is clicked
function dispatchBtnAction(e) {
    // Get the data attribute set on the button, data-tech
    // Basically the button text
    const tech = e.target.dataset.tech;
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