import React from 'react';
import { Link } from 'react-router-dom';
import './CarInventory.css';
import logo from '../../images/logo-light.png'

const CarInventory = () => {
    return (
        <div className='car-detail'>
            <div className="container py-5">
                <div className="detail-content">
                    <img className='mx-auto mb-4 d-block' src={logo} alt="" />
                    <h1 className='text-center text-white mb-4'>Welcome to our Training</h1>
                    <p className='w-75 text-white mx-auto text-center mb-4'>We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.</p>
                    <div className='text-center'>
                        <Link to="/checkout">
                            <button className='btn btn-danger'>Proceed Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInventory;