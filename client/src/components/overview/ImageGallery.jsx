import React from 'react';
import { useSelector } from 'react-redux';

const ImageGallery = (props) => {

  let selectedStyle = useSelector((state) => state.styleReducer.style);

  return (
    <div id="ImageGallery">
      {selectedStyle && <img src={selectedStyle.photos[0].url} className="img-fluid" alt="Responsive image" />}
      {/* <img src="https://tinyurl.com/pfvavzm8" className="img-fluid" alt="Responsive image"/> */}
    </div>
  );
};

export default ImageGallery;