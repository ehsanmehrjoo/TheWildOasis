import React, { useEffect } from 'react'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Fullpage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
    `
function ProtectedRoute({children}) {
    const navigate = useNavigate()
    // 1. Load the authenticated user
    const { isLoading , isAuthenticated} = useUser()
    
    // 2. IF there is NO authenticated user , redirect to the login page
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, isLoading, navigate])

    // 3. Which loading, show a spinner
    if (isLoading) {
        return (
            <Fullpage>
                <Spinner />
            </Fullpage>
        )
    }

    
    // 4. IF there IS a user render the app
    return isAuthenticated ? children : null
  
}

export default ProtectedRoute