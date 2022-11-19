import React from "react"

export default function Usuario(props) {
    const [nome, setNome] = React.useState(props.usuario.nome)
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")
    return (
        <div className="usuario">
            <img onClick={()=>setFoto(prompt("Ponha aqui o link da sua foto"))} src={foto} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span onClick={()=>setNome(prompt("Qual o seu novo nome?"))}>
                    {nome}
                    <ion-icon name="pencil" />
                </span>
            </div>
        </div>
    )
}