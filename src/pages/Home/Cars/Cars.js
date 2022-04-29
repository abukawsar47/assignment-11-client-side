import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div id="cars" className='container my-5'>
            <div className="row">
                <h1 className='text-danger text-center '>Car Inventory</h1>
                <span className='text-center mb-5'>Check out our recent cars</span>
                <div className="cars-container">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        >
                        </Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cars;