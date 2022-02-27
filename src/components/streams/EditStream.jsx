import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  EditStream as EditStreamAction,
  FetchStream as FetchStreamAction,
} from '../../redux/actions/streams';
import { useStreams } from '../../redux/selectors/streams';
import StreamForm from './StreamForm';

function EditStream() {
  const { id } = useParams();
  const homepage_btn = useRef();
  const dispatch = useDispatch();
  const current_stream = useStreams();
  const [streamTitle, setStreamTitle] = useState(null);
  const [streamDescription, setStreamDescription] = useState(null);

  useEffect(() => {
    dispatch(FetchStreamAction(parseInt(id, 10)));
  }, []);

  useEffect(() => {
    setStreamTitle(current_stream.title);
    setStreamDescription(current_stream.description);
  }, [current_stream]);

  const onSubmit = (form_data) => {
    dispatch(EditStreamAction(id, form_data,homepage_btn.current));
  };

  const render_form = () => {
    if (streamTitle && streamDescription) {
      return (
        <StreamForm
          label='Update Stream'
          title={streamTitle}
          description={streamDescription}
          onSubmit={onSubmit}
        />
      );
    } else {
      return <> loading... </>;
    }
  };

  return (
    <section>
      <h1 className='h2 my-4'>Edit Stream</h1>
      {render_form()}
      <Link to='/streams' className='d-none' ref={homepage_btn}></Link>
    </section>
  );
}

export default EditStream;
