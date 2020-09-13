import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HQhDDCi6uZAZfIEXn0QCAXRSkNd8RwW1Ai1lK97MM3pHuv7gCPO0DyuWwqCjCWN719itgiUOuesOyzDb7mt1hDH00Ryzrkp0f';

    const onToken = (token) => {
        alert('Payment successful');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
