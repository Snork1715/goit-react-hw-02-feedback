import React from "react";
import "./Statistic.css";
import "./Statistic.css";

const Statistic = ({ good, neutral, bad, totalCount, goodPercnt }) => {
  return (
    <div className="feedback-statistica">
      <ul className="statistica_items">
        <li className="statistica_good">Good: {good}</li>
        <li className="statistica_neutral">Neutral: {neutral}</li>
        <li className="statistica_bad">Bad: {bad}</li>
        <li className="statistica_total">Total: {totalCount}</li>
        <li className="statistica_positive">
          Positive Feedback: {goodPercnt} %
        </li>
      </ul>
    </div>
  );
};

export default Statistic;
