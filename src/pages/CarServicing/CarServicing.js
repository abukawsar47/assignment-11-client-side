import React from 'react';
import './CarServicing.css';
import services_img01 from '../../images/best_services_img01.jpg';
import services_img02 from '../../images/best_services_img02.jpg';

const CarServicing = () => {
    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                    <div className="text-center my-5">
                        <h2 className="text-danger">Car Servicing</h2>
                        <span className="mb-4">We Are Best In Servicing </span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className=" col-md-6 col-sm-12">
                    <div className='bg-danger text-white mb-4'>
                        <div className="row  align-items-center text-center">
                            <div className="col-md-6 col-sm-12 ">
                                <div className="p-3">
                                    <h3 className='mb-3'>Advanced Vehicle Repair Service</h3>
                                    <h2 className="mb-3">$23500</h2>
                                    <button className="btn btn-dark">Book Now</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img className='img-fluid' src={services_img01} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-sm-9">
                    <div className="bg-dark text-white mb-4">
                        <div className="row align-items-center text-center">
                            <div className="col-md-6 col-sm-12">
                                <div className="p-3">
                                    <h3 className="mb-3">Servicing 5 Years Guarantee</h3>
                                    <h2 className="mb-3">$23500</h2>
                                    <button className="btn btn-danger">Book Now</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img className='img-fluid' src={services_img02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CarServicing;