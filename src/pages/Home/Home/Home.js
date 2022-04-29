import React from 'react';
import CarServicing from '../../CarServicing/CarServicing';
import ExclusiveCar from '../../ExclusiveCar/ExclusiveCar';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <ExclusiveCar></ExclusiveCar>
            <CarServicing></CarServicing>
        </div>
    );
};

export default Home;