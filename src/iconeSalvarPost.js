import React from "react"

let showOutline = "ion:bookmark-outline";
let showSharp = "ion:bookmark-sharp";

export default function IconeSalvarPost(props) {
    const [icon, setIcon] = React.useState(showOutline)
    return (
        <iconify-icon onClick={()=>(changeIcon(icon, setIcon))} icon={icon}></iconify-icon>
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

/*
let showOutline = "";
let showSharp = ".hide";

export default function IconeSalvarPost(props) {
    const [outline, showOL] = React.useState(showOutline)
    const [sharp, showS] = React.useState(showSharp)
    return (
        <div onClick={()=>showOL(show(showOutline))}>
        <iconify-icon class={showOutline} icon="ion:bookmark-outline"></iconify-icon>
        <iconify-icon class={showSharp} icon="ion:bookmark-shap"></iconify-icon></div>
    )
}

function show(showElem){
    if (showElem === ""){
        showElem = ".hide";
        return showElem;
    } else {
        showElem = "";
        return showElem;
    }
}
*/