import React, { useEffect, useState } from 'react';
import {  Navigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';

function ApiRequest (props) {
  const[url , setUrl] = useState()

  function fetchApi(){
    if((props.uhex && props.prc && props.pln) != null){

      fetch (`https://b8jma79vh0.execute-api.us-east-2.amazonaws.com?uhex=${props.uhex}&prc=${props.prc}&pln=${props.pln}`)
      .then( response => response.json())
      .then( response => {
           setUrl(response.url)
        })
        .catch(error => {  toast.error(error)})
    }

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

