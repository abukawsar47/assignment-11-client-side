import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import logo from '../../../images/logo-light.png';

import './Register.css'
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }


    if (loading || updating) {
        return <Loading></Loading>
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className="bg-img-container">
            <div className="container py-5">
                <div className='from-container register-form mx-auto bg-dark'>
                    <img className='w-50 mx-auto mb-4 d-block' src={logo} alt="" />
                    <h2 className='text-danger text-center mb-4'>Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" id="" placeholder='Your Name' />

                        <input type="email" name="email" id="" placeholder='Email Address' required />

                        <input type="password" name="password" id="" placeholder='Password' required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Car Dealer Terms and Conditions</label>
                        <input
                            disabled={!agree}
                            className='w-100 btn btn-danger mt-2'
                            type="submit"
                            value="Register" />
                    </form>
                    <p className='text-white'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;