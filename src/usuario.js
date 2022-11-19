import React from "react"

export default function Usuario(props) {
    const [nome, setNome] = React.useState(props.usuario.nome)
    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" />
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