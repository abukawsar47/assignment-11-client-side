import React from 'react';
import './Update.css'
import logo from '../../images/logo-light.png'

const Update = () => {
    return (
        <div className='bg-img-container'>
            <div className="container">
                <div className='inner-content'>
                    <img className='mx-auto mb-4 d-block' src={logo} alt="" />
                    <h1 className='text-center text-white mb-4'>Congratulation!</h1>
                    <h2 className='text-center text-white '>You have successfully booked our training</h2>
                </div>
            </div>
        </div>
    );
};

export default Update;