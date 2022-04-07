
import React from 'react';
import { Button } from 'react-bootstrap';
import  ApiRequest  from "../Utils/ApiRequest";

export function StripeBtn(props) {
    const { uhex, prc, pln} = props;
    console.log(prc)
    console.log(pln)
  return (
         <div className = 'mt-3'> 

         <ApiRequest uhex = {props.uhex}  prc =  {props.prc}  pln =  {props.pln}/>

         </div>
  );
}

export default StripeBtn;