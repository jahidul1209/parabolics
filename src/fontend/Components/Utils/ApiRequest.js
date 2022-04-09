import React, { useEffect, useState } from 'react';

function ApiRequest (props) {
  const[url , setUrl] = useState()

  function fetchApi(){
    fetch (`https://b8jma79vh0.execute-api.us-east-2.amazonaws.com?uhex=${props.uhex}&prc=${props.prc}&pln=${props.pln}`)
    .then( response => response.json())
    .then( response => {
         setUrl(response.url)
      })
  }

  useEffect(()=>{
    fetchApi()
  },[props.uhex, props.prc, props.pln])
  

  
  return (
          <div>
           
              <a href = {`${url}`} target = '_blank' block={true} className = 'btn btn-outline-light' >
                  <span    style = {{ padding: '5px 20px'}} > 
                            <img className="me-2" src={props.image} alt="img" width={100}/>
                  </span>
              </a>                
          </div>
  );
}

export default ApiRequest;

