import React from "react";
import ImageNotFound from "../assets/images/image-not-found.png";

const Masonry = (props) => {

  if (props.images.length > 0) {
    let masonry_bricks = props.images.map((img) => {
      return (
        <div className="masonry-brick" key={img.id}>
          <img
            src={img.urls.regular}
            alt={img.description}
            className="img-fluid"
          />
        </div>
      );
    });

    return <div className="masonry-container mt-4"> {masonry_bricks} </div>;
  }

  return (
    <div className="nice-shadow text-center">
      <img src={ImageNotFound} alt="no result found" className="img-fluid" />
    </div>
  );
};

Masonry.defaultProps = {
  images: [],
}

export default Masonry;
