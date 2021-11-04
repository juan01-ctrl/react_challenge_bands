import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    let loginButtonStyles = {
        padding: ".6rem 2rem",
        borderRadius:"10px",
        backgroundColor:"#000",
        outline:"none",
        borderStyle:"none",
        color:"#fff",
        fontSize:"20px",
        boxShadow: "10px 7px 13px -7px rgba(0,0,0,0.75)",
        cursor:"pointer"
    }
    return (
        <>
        <button style={loginButtonStyles} onClick={()=> loginWithRedirect()}>Login</button>
        </>
    )
}

export default Login
