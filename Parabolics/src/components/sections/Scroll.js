// src/components/Scroll.js

import React from 'react';

const Scroll = (props) => {
  return( 
    <div className = 'searchCard'>
      {props.children}
    </div>	
  );
}

export default Scroll;