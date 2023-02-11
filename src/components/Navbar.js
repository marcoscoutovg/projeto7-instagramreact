function Navbar() {
    return (
        <div class="navbar">
            <Container />
        </div>
    );
}

function Container() {
    return (
        <div class="container">
            <Logo />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
}

function Logo () {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt="logo"/>
        </div>
    );
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icones() {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function IconesMobile() {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}

export default Navbar