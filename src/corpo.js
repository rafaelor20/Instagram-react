import Stories from "./stories.js"
import Posts from "./posts.js"
import Sidebar from "./sidebar.js"

export default function Corpo() {
    console.log("carrega corpo.js")
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}