let user = "Catana"

export default function Usuario() {
    return (
        <div className="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {user}
                    <ion-icon name="pencil" />
                </span>
            </div>
        </div>
    )
}