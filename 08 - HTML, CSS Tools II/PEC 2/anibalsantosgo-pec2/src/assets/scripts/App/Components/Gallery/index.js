import React from "react";
import images from "../../Data/gallery";
const Gallery = () => {
  return (
    <div className="component_gallery">
      {images.map((image, index) => {
        return (
          <figure key={index} className="gallery-frame">
            <img src={image.url} className="gallery-img" alt={image.name} />
          </figure>
        );
      })}
    </div>
  );
};

export default Gallery;
