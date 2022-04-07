import React from 'react';
import { Button } from 'react-bootstrap';

export function PayPalBtn(props) {
  const { uhex, prc, pln} = props;
  console.log(prc)
  console.log(pln)
  return (
     <Button block={true} className = 'btn btn-success' >
          <span    style = {{ padding: '0px'}} > 
                    <img className="me-2" src={process.env.PUBLIC_URL + '/image/paypal.png'} alt="img" width={100}/>
          </span>
      </Button>
  );
}

export default PayPalBtn;