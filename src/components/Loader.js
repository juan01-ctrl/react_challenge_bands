import React from 'react'
import './Loader.css'

const Loader = () => {
    let stylesLoaderContainer = {
        width: "100%",
        height: "100%",
        backgroundColor:"#000",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        position: "absolute",
        top:0,
        left:0
    }
    return (
        <div style={stylesLoaderContainer}>
             <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
