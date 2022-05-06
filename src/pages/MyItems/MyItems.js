
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const email = user.email;
            const url = `https://enigmatic-sea-44652.herokuapp.com/car?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setCars(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItems();
    }, [user]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://enigmatic-sea-44652.herokuapp.com/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = cars.filter(car => car._id !== id);
                    setCars(remaining);
                })
        }
    }

    return (
        <div className='my-5 min-vh-100'>
            <div className='container'>
                <h2 className='text-center mb-4'>My Items</h2>
                <div className='mb-4 text-center' >
                    <Link to={'/update'} className='btn btn-danger'>View All Cars</Link>
                    <Link to={'/manage-items'} className='btn btn-danger  mx-2'>Manage Items</Link>
                    <Link to={'/add-item'} className='btn btn-danger'>Add Item</Link>
                </div>
                <div className="row text-white">
                    <div className="col-12">
                        <Table striped bordered hover responsive variant="dark">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th className=''>Email</th>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cars.filter(car => car.email === user.email)?.map(car => {
                                        return (

                                            <tr key={car._id}>
                                                <td>{car.userName}</td>
                                                <td className=''>{car.email}</td>
                                                <td>{car.name}</td>
                                                <td><img className='' style={{ width: '60px' }} src={car.img} alt="" /></td>
                                                <td><button className='rounded rounded-circle' onClick={() => handleDelete(car._id)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td>
                                            </tr>
                                        )


                                    })
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MyItems;