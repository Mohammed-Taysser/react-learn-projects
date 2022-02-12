import React from 'react';

function postPagination(props) {
  const { paginationObj, currentPageNumber, setCurrentPageNumber } = props;
  const PaginationButton = ({ label, type }) => {
    return (
      <button
        type='button'
        className={`btn btn-outline-dark ${
          paginationObj[type] === undefined ? 'disabled' : null
        }`}
        onClick={() => {
          setCurrentPageNumber(paginationObj[type]);
          console.log(paginationObj, currentPageNumber);
        }}
      >
        {label}
      </button>
    );
  };

  // not work yet, so temporally stopped
  return <div></div>

  return (
    <div className='mt-4 d-flex justify-content-center'>
      <div className='btn-group' role='group' aria-label='Post Page navigation'>
        <PaginationButton type='first' label='&laquo;' />
        <PaginationButton type='prev' label='Previous' />
        <PaginationButton type='next' label='Next' />
        <PaginationButton type='last' label='&raquo;' />
      </div>
    </div>
  );
}

export default postPagination;
