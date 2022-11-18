import Icone from "./icone.js"

export default function FundoMobile() {
    console.log("carrega fundo-mobile.js")
    return (
        <div className="fundo-mobile">
            <Icone name="home" />
            <Icone name="search-outline" />
            <Icone name="add-circle-outline" />
            <Icone name="heart-outline" />
            <Icone name="person-outline" />
        </div>
    )
}