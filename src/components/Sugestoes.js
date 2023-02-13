function Sugestoes() {

    const infoSugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <Titulo />
            {infoSugestoes.map(m => <Sugestao key={m.nome} imagem={m.imagem} nome={m.nome} razao={m.razao} />)}

        </div>
    );
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} alt={props.nome} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}

function Titulo() {
    return (
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

export default Sugestoes

