import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default Sidebar
