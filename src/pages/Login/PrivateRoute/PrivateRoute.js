import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='bg-img-container'>
            <div className='inner-content text-center'>
                <h3 className='text-white mb-2' > Your Email is not verified!!</h3>
                <h3 className='text-white mb-3'> Please Verify your email address.</h3>
                <button
                    className='btn btn-danger'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification Email Again
                </button>
            </div >
            <ToastContainer></ToastContainer>
        </div >

    }

    return children;
};

export default PrivateRoute;