import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    
    return (
        <div className="profile">
            {isAuthenticated && <p className="profile_name">{user.name}</p>}
        </div>
    )
}

export default Profile
