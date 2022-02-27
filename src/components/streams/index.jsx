import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  useStreams,
  useUserId,
  useIsSignedIn,
} from '../../redux/selectors/streams';
import { DeleteStream, FetchStreams } from '../../redux/actions/streams';
import { TiEdit } from 'react-icons/ti';
import { AiFillDelete } from 'react-icons/ai';
import GoogleAuth from './GoogleAuth.jsx';
import DeleteStreamModal from './DeleteStreamModal';

function ShowStream() {
  const dispatch = useDispatch();
  const streams = useStreams();
  const isSignedIn = useIsSignedIn();
  const userId = useUserId();
  const dismissBtnRef = useRef('');
  const [currentStream, setCurrentStream] = useState({});

  useEffect(() => {
    dispatch(FetchStreams());
  }, []);

  const render_streams_list = () => {
    if (streams.length > 0) {
      return streams.map((stream) => {
        if (stream !== null) {
          return (
            <div className='col-md-4 my-3' key={stream.id}>
              <div className='card h-100 border-0 nice-shadow'>
                <div className='card-body'>
                  <h5 className='card-title d-flex justify-content-between'>
                    <Link
                      to={`/streams/${stream.id}`}
                      className='text-dark text-decoration-none '
                    >
                      {stream.title}
                    </Link>
                    {isSignedIn && render_admin_btn(stream.userId, stream)}
                  </h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className='card-text'> {stream.description}</p>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };

  const render_admin_btn = (stream_userId, stream) => {
    if (stream_userId === userId.userId) {
      return (
        <div className=''>
          <Link
            to={`/streams/edit/${stream.id}`}
            className='h5 mx-1 text-warning'
          >
            <TiEdit />
          </Link>
          <a
            className='h5 mx-1 text-danger'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#delete-modal-id'
            href='#delete-modal-id'
            onClick={() => setCurrentStream(stream)}
          >
            <AiFillDelete />
          </a>
        </div>
      );
    }
  };

  const onStreamDelete = () => {
    dispatch(DeleteStream(currentStream.id));
    dismissBtnRef.current.click();
  };

  return (
    <>
      <section className='py-5 my-5 '>
        <div className='container '>
          <div className='py-5 my-5 bg-light text-center'>
            <h1 className=''>
              <span className='text-warning'>STREAMS</span> homepage
            </h1>
            <p className='lead'>Start The Journey With Us</p>
            <GoogleAuth />
            <Link to='/streams/create' className={`btn btn-primary mt-3`}>
              Create New Stream
            </Link>
          </div>
          <h2 className='my-3'>
            Available <span className='text-warning'>STREAMS</span>
          </h2>
          <div className='row my-5 justify-content-center align-items-stretch'>
            {render_streams_list()}
          </div>
        </div>
      </section>
      <DeleteStreamModal
        onSave={onStreamDelete}
        streamTitle={currentStream.title}
        dismissBtnRef={dismissBtnRef}
      />
    </>
  );
}

export default ShowStream;
