import React, { useState } from 'react';
// components
import CheckoutSteps from '../components/CheckoutSteps';
// redux
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';

const PaymentScreen=(props)=> {
    // redux
    const dispatch = useDispatch(); // unnecessary
    // inner state
    const [paymentMethod, setPaymentMethod] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Paypal</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen;