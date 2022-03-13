import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

export function PayPalBtn(props) {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "ARqKO-Zl4_Hw4YtskemsSuHwSHhY1i0LWd8VxU6uRjZzuI_rwB530TCaYPVvKXzimfMQaSC9Mg8Og4P2"
  console.log(amount)
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalKey,
        vault:true
      }}
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        // label: 'subscribe',
      }}
    />
  );
}

export default PayPalBtn;