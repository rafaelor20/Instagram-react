import React from "react"
import {updateNome, updateFoto} from "./updateString"

export default function Usuario(props) {
    const [nome, setNome] = React.useState(props.usuario.nome)
    const [foto, setFoto] = React.useState(props.usuario.foto)
    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" onClick={()=>setFoto(updateFoto({foto},"Ponha aqui o link da sua foto"))} src={foto} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span  data-test="edit-name" onClick={()=>setNome(updateNome({nome},"Qual o seu novo nome?"))}>
                    <span data-test="name">{nome}</span>
                    <ion-icon name="pencil" />
                </span>
            </div>
        </div>
    )
}