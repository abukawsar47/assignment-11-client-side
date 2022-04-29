import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark text-white py-4'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="text-center">
                            <p className='m-0'> &copy; Copyright {year} Car Dealer Developed by <Link className='text-decoration-none text-danger fw-bold' to={"home"}>A Student of P-HERO</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;