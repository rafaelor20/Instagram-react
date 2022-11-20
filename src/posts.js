import React from "react"
import Icone from "./icone"
import IconeSalvarPost from "./iconeSalvarPost"

const postsLst = [
    {
        nomeUsuario: "meowed",
        iconeUsuario: "assets/img/meowed.svg",
        imagem: "assets/img/gato-telefone.svg",
        iconeCurtida: "assets/img/respondeai.svg",
        usuarioCurtida: "respondeai",
        quantCurtidas: 101.523
    },
    {
        nomeUsuario: "barked",
        iconeUsuario: "assets/img/barked.svg",
        imagem: "assets/img/dog.svg",
        iconeCurtida: "assets/img/adorable_animals.svg",
        usuarioCurtida: " adorable_animals ",
        quantCurtidas: 99.159
    }
]

function Post(props) {
    
    return (
        <div className="post">
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
                <img src={props.imagem} />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <Icone name="heart-outline" />
                        <Icone name="chatbubble-outline" />
                        <Icone name="paper-plane-outline" />
                    </div>
                    <div>
                        <IconeSalvarPost name="bookmark-outline" />
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.iconeCurtida} />
                    Curtido por <strong> {props.usuarioCurtida} </strong> e <strong> outras {props.quantCurtidas} pessoas</strong>
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

