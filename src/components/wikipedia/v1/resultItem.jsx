import React, { useCallback } from 'react';
import { human_date } from '../../DateManipulate';

function resultItem(props) {
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

  return (
    <a
      href={`https://en.wikipedia.org?curid=${props.result.pageid}`}
      className='list-group-item list-group-item-action'
      target={'_blank'}
      rel='noreferrer'
    >
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>{props.result.title}</h5>
        <small>{human_date(props.result.timestamp)}</small>
      </div>
      <div className='mb-1 small' ref={result_body}>
        {props.result.snippet}
      </div>
    </a>
  );
}

export default resultItem;
