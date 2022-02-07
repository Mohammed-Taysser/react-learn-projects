import React from 'react';
import { Link } from "react-router-dom";
import { human_date } from '../../DateManipulate';

function PostItem(props) {
  return (
    <div className='card h-100'>
      <img src={props.picture} className='card-img-top' alt={props.title} />
      <div className='card-body'>
        <h5 className='card-title'> <Link to={`/blogs/v1/${props.id}`} className='text-dark text-decoration-none' title={props.title}> {props.title} </Link> </h5>
        <p className='card-text small mb-0'>{human_date(props.createdAt)}</p>
        <p className='card-text text-muted'>{props.about.slice(0, 70)}</p>
      </div>
    </div>
  );
}

export default PostItem;
