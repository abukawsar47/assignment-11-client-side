import React, { useEffect } from 'react';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;



    if (error || error) {
        errorElement = <p className='text-danger'> {error?.message}</p>
    }

    useEffect(() => {
        if (user || user) {
            navigate('/home');
        }
    }, [user])

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2 text-white'>or</p>
                <div style={{ height: '2px' }} className='bg-white w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger w-100 d-block mx-auto '>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;