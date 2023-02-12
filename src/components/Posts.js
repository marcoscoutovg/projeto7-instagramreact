import { useState } from "react"

function Posts() {

    const infoPosts = [
        { fotoPerfil: "assets/img/meowed.svg", nomePerfil: "meowed", imagemPost: "assets/img/gato-telefone.svg", nomeImagemPost: "gato-telefone", curtidaPerfil: "9gag", imagemPerfilCurtida: "assets/img/9gag.svg", numCurtidas: "91.657" },
        { fotoPerfil: "assets/img/barked.svg", nomePerfil: "barked", imagemPost: "assets/img/dog.svg", nomeImagemPost: "dog", curtidaPerfil: "meowed", imagemPerfilCurtida: "assets/img/meowed.svg", numCurtidas: "101.523" },
        { fotoPerfil: "assets/img/9gag.svg", nomePerfil: "9gag", imagemPost: "assets/img/dog.svg", nomeImagemPost: "dog", curtidaPerfil: "barked", imagemPerfilCurtida: "assets/img/barked.svg", numCurtidas: "86.674" }
    ]

    return (
        <div class="posts">
            {infoPosts.map(m =>
                <Post fotoPerfil={m.fotoPerfil} nomePerfil={m.nomePerfil}
                    imagemPost={m.imagemPost} nomeImagemPost={m.nomeImagemPost}
                    curtidaPerfil={m.curtidaPerfil} numCurtidas={m.numCurtidas}
                    imagemPerfilCurtida={m.imagemPerfilCurtida} />
            )}
        </div>
    )
}

function Post(props) {

    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoPerfil} alt={props.nomePerfil} />
                    {props.nomePerfil}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.imagemPost} alt={props.nomeImagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <CurtirPost name="heart-outline"/>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <SalvarPost name="bookmark-outline" class="preta"/>
                </div>

                <div class="curtidas">
                    <img src={props.imagemPerfilCurtida} alt={props.curtidaPerfil} />
                    <div data-test="likes-number" class="texto">
                        Curtido por <strong>{props.curtidaPerfil}</strong> e <strong data-test="likes-number" >outras {props.numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CurtirPost(props) {

    const [heart, setHeart] = useState("heart-outline")
    const [cor, setCor] = useState('preta')

    function curtir() {
        if (heart === "heart-outline") {
            setHeart("heart")
            setCor('vermelha')
        } else {
            setHeart("heart-outline")
            setCor('preta')
        }
    }
    return (
        <ion-icon data-test="like-post" onClick={curtir} class={cor} name={heart}></ion-icon>
    )
}

function SalvarPost(props) {

    const [icon, setIcon] = useState("bookmark-outline")

    function salvar() {
        if (icon === "bookmark-outline") {
            const novoIcon = "bookmark"
            setIcon(novoIcon)
        } else {
            const novoIcon = "bookmark-outline"
            setIcon(novoIcon)
        }
    }

    return (
        <div>
            <ion-icon data-test="save-post" onClick={salvar} name={icon}></ion-icon>
        </div>
    )
}

/*

function Topo() {
    return (
        <div class="topo">
            <div class="usuario">
                <img src="assets/img/barked.svg" alt="barked" />
                barked
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo() {
    return (
        <div class="conteudo">
            <img data-test="post-image" src="assets/img/dog.svg" alt="dog" />
        </div>
    )
}

function Fundo() {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas />
        </div>
    )
}

function Acoes() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Curtidas() {
    return (
        <div class="curtidas">
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div data-test="likes-number" class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
        </div>
    )
}

*/

export default Posts