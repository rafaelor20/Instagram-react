const sugestoes = [
    {nome:"bad.vibes.memes",foto:"assets/img/bad.vibes.memes.svg",status:"Segue você"},
    {nome:"chibirdart",foto:"assets/img/chibirdart.svg",status:"Segue você"},
    {nome:"razoesparaacreditar",foto:"assets/img/razoesparaacreditar.svg",status:"Novo no Instagram"},
    {nome:"dorable_animals",foto:"assets/img/adorable_animals.svg",status:"Segue você"},
    {nome:"smallcutecats",foto:"assets/img/smallcutecats.svg",status:"Segue você"},
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(Sugestao)}
        </div>
    )
}

function Sugestao(props){
    return (
        <div className="sugestao">
                <div className="usuario">
                    <img src={props.foto} />
                    <div className="texto">
                        <div className="nome">{props.nome}</div>
                        <div className="razao">{props.status}</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
    )
}