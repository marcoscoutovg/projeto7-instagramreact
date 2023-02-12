import { useState } from "react"

function Posts() {

    const infoPosts = [
        { fotoPerfil: "assets/img/meowed.svg", nomePerfil: "meowed", imagemPost: "assets/img/gato-telefone.svg", nomeImagemPost: "gato-telefone", curtidaPerfil: "9gag", imagemPerfilCurtida: "assets/img/9gag.svg", numCurtidas: 91657 },
        { fotoPerfil: "assets/img/barked.svg", nomePerfil: "barked", imagemPost: "assets/img/dog.svg", nomeImagemPost: "dog", curtidaPerfil: "meowed", imagemPerfilCurtida: "assets/img/meowed.svg", numCurtidas: 101523 },
        { fotoPerfil: "assets/img/9gag.svg", nomePerfil: "9gag", imagemPost: "assets/img/dog.svg", nomeImagemPost: "dog", curtidaPerfil: "barked", imagemPerfilCurtida: "assets/img/barked.svg", numCurtidas: 86784 }
    ];

    return (
        <div class="posts">
            {infoPosts.map(m =>
                <Post fotoPerfil={m.fotoPerfil} nomePerfil={m.nomePerfil}
                    imagemPost={m.imagemPost} nomeImagemPost={m.nomeImagemPost}
                    curtidaPerfil={m.curtidaPerfil} numCurtidas={m.numCurtidas}
                    imagemPerfilCurtida={m.imagemPerfilCurtida} />
            )}
        </div>
    );
}

function Post(props) {

    const [heart, setHeart] = useState("heart-outline");
    const [cor, setCor] = useState('preta');
    const [totalCurtidas, setTotalCurtidas] = useState(Intl.NumberFormat("pt-BR").format(props.numCurtidas));

    function curtirImagem() {
        if (heart === "heart-outline") {
            setHeart("heart");
            setCor('vermelha');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas + 1));
        }
    }

    function curtir() {
        if (heart === "heart-outline") {
            setHeart("heart");
            setCor('vermelha');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas + 1));
        } else {
            setHeart("heart-outline");
            setCor('preta');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas));
        }
    }

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
                <img onClick={curtirImagem} data-test="post-image" src={props.imagemPost} alt={props.nomeImagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={curtir} class={cor} name={heart}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <SalvarPost name="bookmark-outline" class="preta" />
                </div>

                <div class="curtidas">
                    <img src={props.imagemPerfilCurtida} alt={props.curtidaPerfil} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidaPerfil}</strong> e <strong data-test="likes-number">outras {totalCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SalvarPost(props) {

    const [icon, setIcon] = useState("bookmark-outline");

    function salvar() {
        if (icon === "bookmark-outline") {
            const novoIcon = "bookmark";
            setIcon(novoIcon);
        } else {
            const novoIcon = "bookmark-outline";
            setIcon(novoIcon);
        }
    }

    return (
        <div>
            <ion-icon data-test="save-post" onClick={salvar} name={icon}></ion-icon>
        </div>
    );
}

export default Posts