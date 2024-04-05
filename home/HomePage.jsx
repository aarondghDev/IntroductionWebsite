import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomePage() {
    
    const navigate = useNavigate();
    const navigateProps = (path) => {
    navigate(path);
}
  return (
    <div>
      <h1>Home page</h1>
      <div>
            <h2>Dashboard</h2>

            <button onClick={() => navigate('/profile')}>
                Go to Profile
            </button>
        </div>
    </div>
  )
}
