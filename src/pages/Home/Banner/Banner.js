import React from 'react';
import banner from '../../../images/banner/banner-main.jpg';

const Banner = () => {
    return (
        <div className='position-relative'>
            <img className='img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Banner;