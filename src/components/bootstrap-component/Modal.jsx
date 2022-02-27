import React from 'react';

function Modal(props) {
  let modal_attribute = {
    className: 'modal fade',
    id: props.id,
    tabIndex: -1,
    'aria-labelledby': props.contentId,
    'aria-hidden': true,
  };

  if (props.static) {
    modal_attribute = {
      ...modal_attribute,
      'data-bs-backdrop': 'static',
      'data-bs-keyboard': false,
    };
  }

  let modal_class = 'modal-dialog modal-dialog-scrollable';
  if (props.center) {
    modal_class += ' modal-dialog-centered';
  }
  if (props.size) {
    modal_class += ` modal-${props.size}`;
  }

  const render_footer = () => {
    if (props.closeBtn || props.saveBtn) {
      return (
        <div className='modal-footer'>
          {props.closeBtn && (
            <button
              type='button'
              className='btn btn-warning'
              data-bs-dismiss='modal'
            >
              {props.closeBtn}
            </button>
          )}
          {props.saveBtn && (
            <button
              type='button'
              className='btn btn-primary'
              onClick={props.onSave}
            >
              {props.saveBtn}
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <div {...modal_attribute}>
      <div className={modal_class}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={props.contentId}>
              {props.title}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              ref={props.dismissBtnRef}
            ></button>
          </div>
          <div className='modal-body'>{props.children}</div>
          {render_footer()}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  contentId: 'example-modal-content-id',
  id: 'example-modal-id',
  title: 'Modal title',
  onSave: (data) => {
    console.log(data);
  },
};

export default Modal;
