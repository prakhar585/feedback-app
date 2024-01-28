import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setfeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Maza aagya ji bohot hii wadiyaaa muaaaahhhhh!!!!",
    },
    {
      id: 2,
      rating: 8,
      text: "Namak zyada hogya si parava!!! koi Gal Na",
    },
    {
      id: 3,
      rating: 3,
      text: "This Puunjabi food is too much for my european gene!!!!",
    },
  ]);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setfeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Do you want to delete this card?"));
    setfeedback(feedback.filter((item) => item.id !== id));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
    //console.log(item);
  };

  const updateFeedback = (id, updItem) => {
    const updateItem = feedback.map((item) =>
      item.id === id
        ? { ...item, rating: updItem.rating, text: updItem.text }
        : item
    );

    console.log(feedback);
    setfeedback(updateItem);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
