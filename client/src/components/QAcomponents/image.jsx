import React, {useState, useEffect} from 'react';
import FullImage from './fullImage.jsx';

let Image = ({src}) => {

  let [fullImageIsOpen, setFullImageIsOpen] = useState(false);

  return (
    <>
      <img style={{height: '70px', width: 'auto'}} src={src}
        onClick={() => setFullImageIsOpen(true)}></img>
      <FullImage open={fullImageIsOpen} onClose={() => setFullImageIsOpen(false)}
        src={src}/>
    </>
  );
};

export default Image;