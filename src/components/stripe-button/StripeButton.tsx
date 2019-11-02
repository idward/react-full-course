import React, { FC } from 'react';
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
    alert('Payment Successfully');
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
