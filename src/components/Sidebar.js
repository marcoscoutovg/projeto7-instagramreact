import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Links() {
    return (
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default Sidebar
