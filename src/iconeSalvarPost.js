import React from "react"

let showOutline = "ion:bookmark-outline";
let showSharp = "ion:bookmark-sharp";

export default function IconeSalvarPost(props) {
    const [icon, setIcon] = React.useState(showOutline)
    return (
        <iconify-icon data-test="save-post" onClick={()=>(changeIcon(icon, setIcon))} icon={icon}></iconify-icon>
    )
}

function changeIcon(icon, setIcon){
    if (icon === showOutline){
        icon = showSharp;
        setIcon(icon);
    } else {
        icon = showOutline;
        setIcon(icon);
    }
}