import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Home/Car/Car';

const Update = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-sea-44652.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div id="cars" className='container my-5'>
            <div className="row">
                <h1 className='text-danger text-center'>Car Inventory</h1>
                <span className='text-center mb-4'>Check out our recent cars</span>
                <div className='mb-4 text-center' >
                    <Link to={'/manage-items'} className='btn btn-danger me-2'>Manage Items</Link>
                    <Link to={'/add-item'} className='btn btn-danger '>Add Item</Link>
                </div>
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

export default Update;