import { useState } from "react";

function Posts() {

    const infoPosts = [
        { fotoPerfil: "assets/img/meowed.svg", nomePerfil: "meowed", imagemPost: "assets/img/gato-telefone.svg",
        nomeImagemPost: "gato-telefone", curtidaPerfil: "9gag", imagemPerfilCurtida: "assets/img/9gag.svg", numCurtidas: 91657
        },
        { fotoPerfil: "assets/img/barked.svg", nomePerfil: "barked", imagemPost: "assets/img/dog.svg",
        nomeImagemPost: "dog", curtidaPerfil: "meowed", imagemPerfilCurtida: "assets/img/meowed.svg", numCurtidas: 101523
        },
        { fotoPerfil: "assets/img/9gag.svg", nomePerfil: "9gag", imagemPost: "assets/img/dog.svg",
        nomeImagemPost: "dog", curtidaPerfil: "barked", imagemPerfilCurtida: "assets/img/barked.svg", numCurtidas: 86784
        }
    ];

    return (
        <div className="posts">
            {infoPosts.map(m =>
                <Post key={m.nomePerfil} fotoPerfil={m.fotoPerfil} nomePerfil={m.nomePerfil}
                    imagemPost={m.imagemPost} nomeImagemPost={m.nomeImagemPost}
                    curtidaPerfil={m.curtidaPerfil} numCurtidas={m.numCurtidas}
                    imagemPerfilCurtida={m.imagemPerfilCurtida} />
            )}
        </div>
    );
}

function Post(props) {

    const contornoHeart = "heart-outline";

    const [heart, setHeart] = useState(contornoHeart);
    const [cor, setCor] = useState('preta');
    const [totalCurtidas, setTotalCurtidas] = useState(Intl.NumberFormat("pt-BR").format(props.numCurtidas));

    function curtirImagem() {
        if (heart === contornoHeart) {
            setHeart("heart");
            setCor('vermelha');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas + 1));
        }
    }

    function curtir() {
        if (heart === contornoHeart) {
            setHeart("heart");
            setCor('vermelha');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas + 1));
        } else {
            setHeart(contornoHeart);
            setCor('preta');
            setTotalCurtidas(Intl.NumberFormat("pt-BR").format(props.numCurtidas));
        }
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.fotoPerfil} alt={props.nomePerfil} />
                    {props.nomePerfil}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick={curtirImagem} data-test="post-image" src={props.imagemPost} alt={props.nomeImagemPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={curtir} class={cor} name={heart}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <SalvarPost name="bookmark-outline" className="preta" />
                </div>

                <div className="curtidas">
                    <img src={props.imagemPerfilCurtida} alt={props.curtidaPerfil} />
                    <div className="texto">
                        Curtido por <strong>{props.curtidaPerfil}</strong> e <strong data-test="likes-number">outras {totalCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SalvarPost() {

    const contornoIcon = "bookmark-outline";

    const [icon, setIcon] = useState(contornoIcon);

    function salvar() {
        if (icon === contornoIcon) {
            setIcon("bookmark");
        } else {
            setIcon(contornoIcon);
        }
    }

    return (
        <div>
            <ion-icon data-test="save-post" onClick={salvar} name={icon}></ion-icon>
        </div>
    );
}

export default Posts