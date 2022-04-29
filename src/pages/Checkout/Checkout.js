import React from 'react';
import './Checkout.css'
import logo from '../../images/logo-light.png'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="container">
                <div className='checkout-msg '>
                    <img className='mx-auto mb-4 d-block' src={logo} alt="" />
                    <h1 className='text-center text-white mb-4'>Congratulation!</h1>
                    <h2 className='text-center text-white '>You have successfully booked our training</h2>
                </div>
            </div>
        </div>
    );
};

export default Checkout;