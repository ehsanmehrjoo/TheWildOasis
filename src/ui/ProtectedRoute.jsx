import React, { useEffect } from 'react';
import useUser from '../features/authentication/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Show spinner while loading
  if (isLoading) {
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );
  }

  // If authenticated, render children; otherwise, show null (or custom message)
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
