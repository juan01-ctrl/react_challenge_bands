import React from 'react'
import LoginButton from './LoginButton';

const Home = () => {
    let sectionStyles = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0f3354",
        color: "#fff",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    }
    let titleStyles = {
        padding: "1rem 0",
        fontSize:"50px"
    }
   
    return (
        <div style={sectionStyles}>
        <h1 style={titleStyles}>React Challenge</h1>
        <LoginButton/>
        </div>
    )
}

export default Home
