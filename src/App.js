/**
 * @description o codigo comentado se refere a aula 117 - limpando a implementação
 * para apagar a comunicação direta e indireta e iniciar com reduz
 * ao invez de apagar o codigo como na aula eu decidi apenas comentar.
 * Fabiana Tavares
 */

/* import React, { useState } from 'react'; */
import React from 'react';
import './App.css';

import Intervalo from './components/Intervalo'
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

/**
 * Sem uso do redux:
 * Comunicação Direta: Componente pai passa parametros para o componente filho.
 * Comunicação Indireta: Componente pai passa uma função para o componente filho.
 */
function App() {

  /* const [min, setMin] = useState(10)
  const [max, setMax] = useState(20) */

  return (
    <div className="App">
      <h1>Exercicio React Redux (Simples) Fabiana</h1>
      <div className="linha">
        {/* <Intervalo min={min} max={max}
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        {/* <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> */}
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
