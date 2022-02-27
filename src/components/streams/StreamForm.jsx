import React, { useState } from 'react';

function StreamForm(props) {
  const [streamTitle, setStreamTitle] = useState(props.title);
  const [streamDescription, setStreamDescription] = useState(props.description);
  const [validateFormClass, setValidateFormClass] =
    useState('needs-validation');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    check_valid_input();
  };

  const check_valid_input = () => {
    setValidateFormClass('needs-validation was-validated');

    if (streamTitle && streamDescription) {
      let form_data = {
        title: streamTitle,
        description: streamDescription,
      };
      props.onSubmit(form_data);
    }
  };

  const handel_input = (evt, set_function) => {
    let input_value = evt.target.value;

    if (input_value.length > 0) {
      evt.target.className = 'form-control is-valid';
    } else {
      evt.target.className = 'form-control is-invalid';
    }
    set_function(evt.target.value);
  };

  return (
    <div>
      <form className={validateFormClass} noValidate onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='stream-title-id' className='form-label'>
            Stream Title
          </label>
          <input
            type='text'
            value={streamTitle}
            onChange={(e) => {
              handel_input(e, setStreamTitle);
            }}
            className='form-control'
            id='stream-title-id'
            placeholder=''
            required
          />
          <div className='valid-feedback'>Looks good!</div>
          <div className='invalid-feedback'>Please choose a title.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='stream-description-id' className='form-label'>
            Stream Description
          </label>
          <textarea
            className='form-control'
            id='stream-description-id'
            rows={3}
            value={streamDescription}
            onChange={(e) => {
              handel_input(e, setStreamDescription);
            }}
            required
          ></textarea>
          <div className='valid-feedback'>Looks good!</div>
          <div className='invalid-feedback'>Please choose a description.</div>
        </div>
        <button type='submit' className='btn btn-primary mb-3'>
          {props.label}
        </button>
      </form>
    </div>
  );
}

StreamForm.defaultProps = {
  title: '',
  description: '',
  label: 'Save Stream',
  onSubmit: (data) => {
    console.log(data);
  },
};

export default StreamForm;
