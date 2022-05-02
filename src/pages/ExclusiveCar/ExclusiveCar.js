import React from 'react';
import exclusiveCar from '../../images/exc_featured_img.png';

const ExclusiveCar = () => {
    return (
        <div className='exclusive-Car pt-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="text-center mb-5">
                            <h2 className="text-danger">Exclusive Car Featured</h2>
                            <span className="mb-4">Our Exclusive Car</span>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center text-md-start  text-center">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="  mb-4">
                            <div className="content">
                                <h5>SUPER FAST CAR</h5>
                                <p>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.</p>
                            </div>
                        </div>
                        <div className="  mb-4">
                            <div className="content">
                                <h5>DEALERSHIP POINTS</h5>
                                <p>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-none d-lg-block">
                        <div className="">
                            <img src={exclusiveCar} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="  mb-4">
                            <div className="content">
                                <h5>SUPER FAST CAR</h5>
                                <p>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.</p>
                            </div>
                        </div>
                        <div className="  mb-4">
                            <div className="content">
                                <h5>DEALERSHIP POINTS</h5>
                                <p>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveCar;