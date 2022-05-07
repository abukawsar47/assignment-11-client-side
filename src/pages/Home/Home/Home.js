import React, { useEffect, useState } from 'react';
import CarServicing from '../../CarServicing/CarServicing';
import ExclusiveCar from '../../ExclusiveCar/ExclusiveCar';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-sea-44652.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div className='min-vh-100'>
            {
                cars[0]?.img ? <div>
                    <Banner></Banner>
                    <Cars></Cars>
                    <ExclusiveCar></ExclusiveCar>
                    <CarServicing></CarServicing>
                </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Home;
