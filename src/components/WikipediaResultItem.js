import React, { useCallback } from "react";

function WikipediaResultItem(props) {
  const result_body = useCallback(
    (node) => {
      if (node !== null) {
        node.innerHTML = props.result.snippet.replace(
          /<span class="searchmatch">/gi,
          '<span style="color: red">'
        );
      }
    },
    [props.result.snippet]
  );

  const add_zero = (num) => {
    return num.toString().length > 1 ? num : `0${num}`;
  };
  const human_date = (date) => {
    const temp = new Date(date);
    return `${temp.getFullYear()}-${add_zero(temp.getMonth() + 1)}-${add_zero(
      temp.getDay() + 1
    )}`;
  };

  return (
    <a
      href={`https://en.wikipedia.org?curid=${props.result.pageid}`}
      className="list-group-item list-group-item-action"
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.result.title}</h5>
        <small>{human_date(props.result.timestamp)}</small>
      </div>
      <div className="mb-1 small" ref={result_body}>
        {props.result.snippet}
      </div>
    </a>
  );
}

export default WikipediaResultItem;
