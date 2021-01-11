import './App.css';
import Conversor from "./Components/Conversor";

function App() {
  return (
    <div className="App">
      <div className="Titulo">
        <h1>Conversor de Moedas</h1>
      </div>
      <div className="Conversor">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
}

export default App;
