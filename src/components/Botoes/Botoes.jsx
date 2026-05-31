import "./Botoes.css";
import play from "./imgs-icons/play.png";
import pause from "./imgs-icons/pausa.png";
import proximo from "./imgs-icons/proximo.png";
import anterior from "./imgs-icons/anterior.png";
import audio from "../Audio/PraNaoPensarEmVoce.mp3";
import { useRef, useState } from "react"; // removeu useEffect

function Botoes() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [imgPlay, setImgPlaying] = useState(play);
  const [progresso, setProgresso] = useState(0);

  const avancar = () => {
    audioRef.current.currentTime += 10;
  };

  const voltar = () => {
    audioRef.current.currentTime -= 10;
  };

  const atualizarProgresso = () => {
    const audio = audioRef.current;
    const porcentagem = (audio.currentTime / audio.duration) * 100;
    setProgresso(porcentagem);
  };

  const pularPara = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (e.target.value / 100) * audio.duration;
    setProgresso(e.target.value);
  };

  const playpause = () => {
    if (playing) {
      audioRef.current.pause();
      setImgPlaying(play);
    } else {
      audioRef.current.play();
      setImgPlaying(pause);
    }
    setPlaying(!playing);
  };

  return (
    <div className="style-bnt">
      <audio src={audio} ref={audioRef} onTimeUpdate={atualizarProgresso} />
      <input
        type="range"
        min="0"
        max="100"
        value={progresso}
        onChange={pularPara}
        style={{
          background: `linear-gradient(to right, #1db954 ${progresso}%, #ffffff ${progresso}%)`,
        }}
      />
      s
      <div className="style-bnt-click">
        <img src={anterior} alt="anterior" onClick={voltar} className="bnt" />
        <img
          src={imgPlay}
          alt="play/pause"
          onClick={playpause}
          className="bnt"
        />
        <img src={proximo} alt="próximo" onClick={avancar} className="bnt" />
      </div>
    </div>
  );
}

export default Botoes;
