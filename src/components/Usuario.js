function Usuario() {
    return (
        <div class="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">catanacomics</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default Usuario