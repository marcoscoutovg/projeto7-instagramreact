import { useState } from "react"

function Usuario() {

    const infoUsuario = { 
        imagem: "assets/img/catanacomics.svg", 
        altImg: "imagem de perfil", 
        nomePerfil: "catanacomics" 
    };

    return (
        <User imagem={infoUsuario.imagem} altImg={infoUsuario.altImg} nomePerfil={infoUsuario.nomePerfil} />
    );
}

function User(props) {

    const [nomePerfil, setNomePerfil] = useState(props.nomePerfil);
    const [fotoPerfil, setFotoPerfil] = useState(props.imagem);

    function trocarUsuario() {

        const novoNome = prompt('Digite o nome de usuário');

        if (novoNome !== '' && novoNome !== undefined && novoNome !== null) {
            setNomePerfil(novoNome);
        }
    }

    function trocarFoto() {

        const novaFoto = prompt('Digite um novo link');

        if (novaFoto !== '' && novaFoto !== undefined && novaFoto !== null) {
            setFotoPerfil(novaFoto);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocarFoto} data-test="profile-image" src={fotoPerfil} alt={props.altImg} />
            <div class="texto">
                <span>
                    <strong data-test="name">{nomePerfil}</strong>
                    <ion-icon onClick={trocarUsuario} data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}

export default Usuario