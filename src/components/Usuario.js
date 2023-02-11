function Usuario() {

    const infoUsuario = { imagem: "assets/img/catanacomics.svg", altImg: "imagem de perfil", nomePerfil: "catanacomics" }

    return (
        <User imagem={infoUsuario.imagem} altImg={infoUsuario.altImg} nomePerfil={infoUsuario.nomePerfil} />
    )

}

function User(props) {
    return (
        <div class="usuario">
            <img data-test="profile-image" src={props.imagem} alt={props.altImg} />
            <div class="texto">
                <span>
                    <strong data-test="name">{props.nomePerfil}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default Usuario