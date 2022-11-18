import React from "react";
import ReactDom from "react-dom"
import Navbar from "./navbar.js"
import Corpo from "./corpo.js"
import FundoMobile from "./fundo-mobile.js";


function App() {
    return (
        <div class="app">
          <Navbar />
          <Corpo />
          <FundoMobile />
        </div>
    )
}

const app = App();
ReactDom.render(app, document.querySelector(".root"));