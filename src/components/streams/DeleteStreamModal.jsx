import React from 'react';
import Modal from '../bootstrap-component/Modal';

function DeleteStreamModal(props) {
  return (
    <>
      <Modal
        id='delete-modal-id'
        title='Delete Stream'
        closeBtn='Cancel'
        saveBtn='Yes, Delete'
        onSave={props.onSave}
        dismissBtnRef={props.dismissBtnRef}
      >
        <p className='lead'>Are You Sure To Delete Stream:</p>
        <p className=''> {props.streamTitle} </p>
      </Modal>
    </>
  );
}

export default DeleteStreamModal;
