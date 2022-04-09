import React from 'react';
import ApiRequest from '../Utils/ApiRequest';

 function PayPalBtn(props) {

  return (
    <div className = 'mt-3'> 
             <ApiRequest uhex = {props.uhex}  prc =  {props.prc}  pln =  {props.pln}  image = {process.env.PUBLIC_URL + '/image/paypal.png'}/>
         </div>
  );
}

export default PayPalBtn;