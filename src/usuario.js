import React from "react"

export default function Usuario(props) {
    const [nome, setNome] = React.useState(props.usuario.nome)
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")
    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" onClick={()=>setFoto(prompt("Ponha aqui o link da sua foto"))} src={foto} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span data-test="name" data-test="edit-name" onClick={()=>setNome(prompt("Qual o seu novo nome?"))}>
                    {nome}
                    <ion-icon name="pencil" />
                </span>
            </div>
        </div>
    )
}