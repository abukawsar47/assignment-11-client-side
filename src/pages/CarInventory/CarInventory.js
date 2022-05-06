

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarInventory = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        const url = `https://enigmatic-sea-44652.herokuapp.com/car/${carId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [carId])


    const handleCarDeliveredQuantity = () => {
        let { name, _id, description, price, img, quantity, supplier } = car;
        if (quantity > 0) {
            quantity = quantity - 1;
            const updateCar = { name, _id, description, price, img, quantity, supplier };
            setCar(updateCar);
            const url = `https://enigmatic-sea-44652.herokuapp.com/car/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateCar)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCar(data)
                })
        }
        else {
            alert('stock out')
        }
    }

    const handleCarUpdateQuantity = (event) => {
        event.preventDefault()
        let { name, _id, description, price, img, quantity, supplier } = car;

        const newUpdateQuantity = event.target.number.value;
        if (!newUpdateQuantity || newUpdateQuantity < 0) {
            alert('please Enter valid number');
        }
        else {
            quantity = parseInt(quantity) + parseInt(newUpdateQuantity);

            const updateCar = { name, _id, description, price, img, quantity, supplier };
            const url = `https://enigmatic-sea-44652.herokuapp.com/car/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateCar)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCar(data)
                    event.target.reset()
                })
        }
    }


    return (
        <div className='bg-img-container'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="text-white bg-dark">
                            <div><img className='w-100' src={car.img} alt="" /></div>
                            <div className="p-4">
                                <h1 className='text-center text-white mb-4'>{car.name}</h1>
                                <p className='text-white text-center mb-4'>{car.description}</p>
                                <div className='d-md-flex  justify-content-md-around text-center my-4'>
                                    <p className='card-text'>Price: <strong className='text-danger'>${car.price}</strong></p>
                                    <p className='card-text'>Quantity: <strong className='text-danger'>{car.quantity}</strong></p>
                                    <p className='card-text'>Supplier: <strong className='text-danger'>{car.supplier}</strong></p>
                                </div>
                                <div className='text-center mb-3'>
                                    <button onClick={handleCarDeliveredQuantity} className='btn btn-danger w-100'>Delivered</button>
                                </div>
                                <div>
                                    <h2 className='text-center text-white mb-4' >Update Quantity Stock</h2>
                                    <form onSubmit={handleCarUpdateQuantity}>
                                        <input className='w-100 mb-4 p-2' type="number" name="number" placeholder='Enter Quantity...' />
                                        <br />
                                        <input className='w-100 btn btn-danger' type="submit" value="Update Stock" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInventory;