import React from 'react';

const Masonry = (props) => {
  let masonry_bricks = props.images.map((img) => {
    return (
      <div className='masonry-brick' key={img.id}>
        <img
          src={img.urls.regular}
          alt={img.description}
          className='img-fluid'
        />
      </div>
    );
  });

  return <div className='masonry-container mt-4'> {masonry_bricks} </div>;
};

Masonry.defaultProps = {
  images: [],
};

export default Masonry;
