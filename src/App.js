import React from 'react';
import'./App.css';
import MostrarTexto from 'src\TA5.jsx';

function App() {
  return (
    <div className="App">
      {/*Renderizar el componente MostrarTexto */}
        <h1>Mostrar y Ocultar</h1>
      <MostrarTexto />
    </div>
  );
}

export default App;
