import Navbar from "./Navbar";
import Corpo from "./Corpo";
import Posts from "./Posts";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function App() {
    return (
        <div>
            <Navbar />

            <Corpo />
        </div>
    );
}


// tira a tag corpo que renderiza o navbar