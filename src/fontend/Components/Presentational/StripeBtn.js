import React from 'react';
import  ApiRequest  from "../Utils/ApiRequest";

 function StripeBtn(props) {

  return (
         <div className = 'mt-3'> 
             <ApiRequest uhex = {props.uhex}  prc =  {props.prc}  pln =  {props.pln}  image = {process.env.PUBLIC_URL + '/image/Stripe_logo,_revised_2016.png'} />
         </div>
  );
}

export default StripeBtn;