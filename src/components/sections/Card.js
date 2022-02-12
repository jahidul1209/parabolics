
import React from 'react';
import { Link } from 'react-router-dom';

function Card({symbol,companyName}) {
  return(
       <div className="mt-1">
          <Link to =  {`/chart/${symbol}`}>
         <div className="searchCdIm">
         
               <div className = 'searchCrt'>
                  <h2>{symbol}</h2>
                  <p>{companyName}</p>
                </div>
          </div>
          </Link>
    </div>
  );
}

export default Card;