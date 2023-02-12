function Sugestoes() {

    const infoSugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
    ];

    return (
        <div class="sugestoes">
            <Titulo />
            {infoSugestoes.map(m => <Sugestao imagem={m.imagem} nome={m.nome} razao={m.razao} />)}

        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={props.nome} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Titulo() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

export default Sugestoes

