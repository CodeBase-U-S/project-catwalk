import React, {useState, useEffect} from 'react';
import FullImage from './fullImage.jsx';

let Image = ({src, style}) => {

  let [fullImageIsOpen, setFullImageIsOpen] = useState(false);

  return (
    <>
      <img style={style} src={src}
        onClick={() => setFullImageIsOpen(true)}></img>&nbsp;
      <FullImage open={fullImageIsOpen} onClose={() => setFullImageIsOpen(false)}
        src={src}/>
    </>
  );
};

export default Image;