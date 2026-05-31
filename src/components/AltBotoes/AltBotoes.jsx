import aleatorio from "./imgs/aleatorio.png";
import like from "./imgs/gostar.png";
import "./AltBotoes.css";
function AltBotoes() {
  return (
    <div className="style-alt-div">
      <img
        src={aleatorio}
        alt="imagem de simbolo aleatorio"
        className="style-alt-bnt"
      />
      <img src={like} alt="simbolo like" className="style-alt-bnt" />
    </div>
  );
}

export default AltBotoes;
