import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='bg-img-container'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="border border-white border-2 rounded p-4 my-5 text-white">
                            <h2 className='text-center mb-4'>Please Add an Item</h2>
                            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                <input className='mb-4 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                                <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
                                <textarea className='mb-3 p-2' placeholder='Description' {...register("description")} />
                                <input className='mb-3 p-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                                <input className='mb-3 p-2' placeholder='Supplier' {...register("supplier")} />
                                <input className='mb-3 p-2' placeholder='Photo URL' {...register("img")} />
                                <input className='btn btn-danger' type="submit" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;