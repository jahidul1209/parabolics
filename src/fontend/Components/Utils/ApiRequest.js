import React, { useState } from 'react';

function ApiRequest (props) {
  const[url , setUrl] = useState()
  

  function fetchApi(){
    fetch (`https://b8jma79vh0.execute-api.us-east-2.amazonaws.com?uhex=${props.uhex}&prc=${props.prc}&pln=${props.pln}`)
    .then( response => response.json())
     .then( response => {
         setUrl(response.url)
  })
  }
  fetchApi()

  
  return (
    <div>
           
                    <a href = {`${url}`} block={true} className = 'btn btn-dark' >
                        <span    style = {{ padding: '0px 15px'}} > 
                                  <img className="me-2" src={process.env.PUBLIC_URL + '/image/Stripe_logo,_revised_2016.png'} alt="img" width={70}/>
                        </span>
                    </a>                
    </div>
  );
}

export default ApiRequest;

