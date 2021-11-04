import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


const LogoutButton = () => {
const {logout} = useAuth0()
let logoutButtonStyles = {
    padding: ".6rem 2rem",
    borderRadius:"10px",
    backgroundColor:"#000",
    outline:"none",
    borderStyle:"none",
    color:"#fff",
    fontSize:"16px",
    boxShadow: "10px 7px 13px -7px rgba(0,0,0,0.75)",
    cursor:"pointer"
}
    return (
        <button style={logoutButtonStyles} onClick={()=> logout()}>
            Logout
        </button>
    )
}

export default LogoutButton
