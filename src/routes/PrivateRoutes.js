import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/UserContext/Usecontext';

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div className='flex justify-center mt-10'>

        <progress className="progress w-56"></progress>
      </div>
    )
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoutes;