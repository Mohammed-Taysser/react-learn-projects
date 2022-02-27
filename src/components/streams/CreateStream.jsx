import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateStream as CreateStreamAction } from '../../redux/actions/streams';
import StreamForm from './StreamForm';

function CreateStream() {
  const dispatch = useDispatch();
  const homepage_btn = useRef();

  const onSubmit = (form_data) => {
    dispatch(CreateStreamAction(form_data, homepage_btn.current));
  };

  return (
    <section>
      <h1 className='h2 my-4'>Create Stream</h1>
      <StreamForm label='Create Stream' onSubmit={onSubmit} />
      <Link to='/streams' className='d-none' ref={homepage_btn}></Link>
    </section>
  );
}

export default CreateStream;
