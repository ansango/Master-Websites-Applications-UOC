import React from "react";
import images from "../../data/gallery";

const figures = images.map((image, index) => {
  return (
    <figure key={index}>
      <img src={image.url} alt={image.name} />
    </figure>
  );
});

const Gallery = () => {
  return (
    <div className="gallery">
      <div>{figures}</div>
    </div>
  );
};

export default Gallery;
