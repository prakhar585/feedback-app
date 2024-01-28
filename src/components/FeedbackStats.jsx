import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  var avgRating =
    feedback.reduce((total, currentValue) => {
      return total + currentValue.rating;
    }, 0) / feedback.length;

  avgRating = avgRating.toFixed(1);

  return (
    <div>
      <div className="feedback-stats">
        <h4>Total reviews {feedback.length}</h4>
        <h4>Average rating = {isNaN(avgRating) ? 0 : avgRating}</h4>
      </div>
    </div>
  );
}

export default FeedbackStats;
