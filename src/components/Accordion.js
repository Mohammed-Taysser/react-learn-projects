import React, { useState } from "react";

const Accordion = (props) => {
  const [SelectedQuestion, setSelectedQuestion] = useState(0);
  const OnQuestionChange = (index) => {
    if (index !== SelectedQuestion) {
      setSelectedQuestion(index);
    } else {
      setSelectedQuestion(null);
    }
  };
  return (
    <div className="border rounded p-3">
      {props.items.map((item, index) => {
        return (
          <AccordionItem
            question={item.question}
            answer={item.answer}
            index={index}
            key={index}
            is_open={index === SelectedQuestion ? true : false}
            OnQuestionChange={OnQuestionChange}
          />
        );
      })}
    </div>
  );
};

const AccordionItem = (props) => {
  return (
    <div
      onClick={(e) => props.OnQuestionChange(props.index)}
      className=""
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex justify-content-between align-content-center align-items-center border-bottom pb-1 mb-2">
        <h5 className=""> {props.question}</h5>
        <i
          className={`fas fa-chevron${props.is_open ? "-right" : "-down"} `}
        ></i>
      </div>
      <p className={`${props.is_open ? "" : "d-none"}`}> {props.answer} </p>
    </div>
  );
};

Accordion.defaultProps = {
  items: [
    {
      question: "Question",
      answer: "Answer",
    },
  ],
};

export default Accordion;
