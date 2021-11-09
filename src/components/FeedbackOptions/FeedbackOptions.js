import React from "react";
import shortid from "shortid";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ types, onIncrement }) => {
  return (
    <div className="feedback-buttons">
      {types.map((type) => (
        <button
          key={shortid.generate()}
          type="button"
          onClick={() => onIncrement(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
