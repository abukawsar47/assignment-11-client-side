import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CarInventory.css';

const CarInventory = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/car/${carId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [carId])

    return (
        <div className='bg-img-container'>
            <div className="container py-5">
                <div className="inner-content">
                    <h1 className='text-center text-white mb-4'>{car.name}</h1>
                    <p className='w-75 text-white mx-auto text-center mb-4'>We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.</p>
                    <div className='text-center'>
                        <Link to="/update">
                            <button className='btn btn-danger'>Delivered</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInventory;