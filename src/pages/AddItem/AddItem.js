import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();


    const userName = user.displayName;
    const email = user.email

    const onSubmit = data => {
        if (!data.success) {

        }
        const url = `https://enigmatic-sea-44652.herokuapp.com/car`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
            })
    };


    return (
        <div className='bg-img-container'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="border border-white border-2 rounded p-4 my-5 text-white bg-dark">
                            <h2 className='text-center mb-4'>Please Add an Item</h2>
                            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                <label className='mb-2'>Product Name</label>
                                <input className='mb-2 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                                <label className='mb-2'>Price</label>
                                <input className='mb-2 p-2' placeholder='Price' type="number" {...register("price")} />
                                <label className='mb-2'>Description</label>
                                <textarea className='mb-2 p-2' placeholder='Description' {...register("description")} />
                                <label className='mb-2'>Quantity</label>
                                <input className='mb-2 p-2' placeholder='Quantity' type="number" {...register("quantity")} />
                                <label className='mb-2'>Supplier</label>
                                <input className='mb-2 p-2' placeholder='Supplier' {...register("supplier")} />
                                <label className='mb-2'>Product Image</label>
                                <input className='mb-2 p-2' placeholder='Photo URL' {...register("img")} />
                                <label className='mb-2'>User Name</label>
                                <input className='mb-2 p-2' value={userName} readOnly {...register("userName")} />
                                <label className='mb-2'>User Email</label>
                                <input className='mb-2 p-2' value={email} readOnly {...register("email")} />
                                <input className='btn btn-danger mt-2' type="submit" value="Add Item" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddItem;