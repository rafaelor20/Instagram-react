import Icone from "./icone.js"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Icone name="logo-instagram" />
          <div className="separador" />
          <img src="assets/img/logo.png" />
        </div>
        <div className="logo-mobile">
          <Icone name="logo-instagram" />
        </div>
        <div className="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>
        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="icones">
          <Icone name="paper-plane-outline" />
          <Icone name="compass-outline" />
          <Icone name="heart-outline" />
          <Icone name="person-outline" />
        </div>
        <div className="icones-mobile">
          <Icone name="paper-plane-outline" />
        </div>
      </div>
    </div>
  )
}

