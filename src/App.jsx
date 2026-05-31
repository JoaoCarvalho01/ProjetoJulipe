import "./App.css";
import AltBotoes from "./components/AltBotoes/AltBotoes";
import Botoes from "./components/Botoes/Botoes";
import Capa from "./components/Capa/Capa";
import Texto from "./components/Texto/Texto";
import Titulo from "./components/Titulo/Titulo";

function App() {
  return (
    <>
      <Capa />
      <Titulo />
      <Botoes />
      <AltBotoes />
      <Texto />
    </>
  );
}

export default App;
