import React, { FC } from 'react';
import axios from 'axios';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IStripeButtonProps {
  [key: string]: any;
}

const StripeButton: FC<IStripeButtonProps> = ({ price }) => {
  // Stripe key
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_XeFe3tdxbz1IIkmpJrfMDeFx';
  const onToken = (token: Token) => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe,
      },
    })
      .then(resp => {
        console.log(resp);
        alert('Payment Successfully');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishKey}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeButton;
