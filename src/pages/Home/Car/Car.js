import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Car.css'

const Car = ({ car }) => {
    const { _id, name, img, description, price, quantity, supplier } = car;
    const navigate = useNavigate();

    const navigateToCarDetail = id => {
        navigate(`/car/${id}`);
    }
    return (
        <div className='car'>
            <img className='car-img' src={img} alt="" />
            <div className='p-4'>
                <h2>{name}</h2>
                <p className='text-danger'>Price: <strong>${price}</strong></p>
                <p><small>{description}</small></p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <button onClick={() => navigateToCarDetail(_id)} className='btn btn-danger'>Update</button>
            </div>
        </div>
    );
};

export default Car;