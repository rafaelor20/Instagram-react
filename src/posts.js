import React from "react"
import Icone from "./icone"
import IconeSalvarPost from "./iconeSalvarPost"

let like = 0;

const postsLst = [
    {
        nomeUsuario: "meowed",
        iconeUsuario: "assets/img/meowed.svg",
        imagem: "assets/img/gato-telefone.svg",
        iconeCurtida: "assets/img/respondeai.svg",
        usuarioCurtida: "respondeai",
        quantCurtidas: 101523
    },
    {
        nomeUsuario: "barked",
        iconeUsuario: "assets/img/barked.svg",
        imagem: "assets/img/dog.svg",
        iconeCurtida: "assets/img/adorable_animals.svg",
        usuarioCurtida: " adorable_animals ",
        quantCurtidas: 99159
    }
]

function Post(props) {
    const [likes, setLikes] = React.useState(props.quantCurtidas);
    const [heartColor, setHeartColor] = React.useState("black-icon md hydrated");
    const [heartIcon, setHeartIcon] = React.useState("heart-outline");
    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.iconeUsuario} />
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <Icone name="ellipsis-horizontal" />
                </div>
            </div>
            <div className="conteudo">
                <img data-test="post-image" onClick={()=>(addLike(likes, "picture", setLikes, heartColor, setHeartColor, heartIcon, setHeartIcon))} src={props.imagem} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon class={heartColor} data-test="like-post" onClick={()=>(addLike(likes, "likeButton", setLikes, heartColor, setHeartColor, heartIcon, setHeartIcon))} name={heartIcon} ></ion-icon>
                        <Icone name="chatbubble-outline" />
                        <Icone name="paper-plane-outline" />
                    </div>
                    <div>
                        <IconeSalvarPost name="bookmark-outline" />
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.iconeCurtida} />
                    <p data-test="likes-number">Curtido por <strong> {props.usuarioCurtida} </strong> e <strong> outras {(likesToString(likes))} pessoas</strong></p>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    return (
        <div className="posts">
            {postsLst.map(Post)}
        </div>
    )
}

function addLike(likes, elem, setLikes, heartColor, setHeartColor, heartIcon, setHeartIcon){
    switch(like){
        case 0:
            like = 1;
            setLikes(likes+like);
            setHeartIconAux(heartIcon, setHeartIcon);
            redHeart(heartColor, setHeartColor);
            
            break;
        case 1:
            if (elem === "picture"){
                setLikes(likes);
                break;
            }
            like = (-1);
            setLikes(likes + like);
            setHeartIconAux(heartIcon, setHeartIcon);
            redHeart(heartColor, setHeartColor);
            
            break;
        case (-1):
            like = 1;
            setLikes(likes+like);
            setHeartIconAux(heartIcon, setHeartIcon);
            redHeart(heartColor, setHeartColor);
            
            break;
        default:
            break;
    }
}

function redHeart(heartColor, setHeartColor){
    if(heartColor === "black-icon md hydrated"){
        heartColor = "red-icon md hydrated";
    } else {
        heartColor = "black-icon md hydrated";
        
    }
    setHeartColor(heartColor);
}

function setHeartIconAux(heartIcon, setHeartIcon){
    if (heartIcon === "heart-outline"){
        heartIcon = "heart-sharp";
    } else {
        heartIcon = "heart-outline";
    }
    setHeartIcon(heartIcon);
}

function likesToString(num){
    const likesStr = `${parseInt(num/1000)}.${num%1000}`;
    return likesStr;
}