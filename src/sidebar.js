import Usuario from "./usuario.js"
import Sugestoes from "./sugestoes.js"

export default function SideBar(){
    let user = {nome:"Catana"}
    return (
        <div className="sidebar">
            <Usuario usuario={user}/>
            <Sugestoes />
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}