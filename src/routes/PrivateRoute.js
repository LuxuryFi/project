import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const currentPatient = JSON.parse(localStorage.getItem('currentPatient'));

  // Note logged in so redirect to login page
  if (!Boolean(localStorage.getItem('currentPatient'))) {
    return <Navigate to="/signin" replace={true} />;
  }

  // If the account is not verified

  // Authorised role will return the children route
  return children;
};

export default PrivateRoute;
