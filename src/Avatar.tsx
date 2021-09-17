import React from "react";

export default function Avatar(props: { imageUrl: string }) {
    return <div style={{ 
        margin: "auto",
        width: "60%",
        borderRadius: "50%",
        boxShadow: "0 0 16px silver",
        aspectRatio: "1/1", 
        backgroundImage: `url(${props.imageUrl})`, 
        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" 
    }} />
}