import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { estudiante } from './Components/Ejercicio11';
import { ejercicio12 } from './Components/Ejercicio12';
import { ejercicio1 } from './Components/Ejercicio1';
import { ejercicio2 } from './Components/Ejercicio2';
import { ejercicio3 } from './Components/Ejercicio3';
import { ejercicio4 } from './Components/Ejercicio4';
import { ejercicio5 } from './Components/Ejercicio5';
import { ejercicio6 } from './Components/Ejercicio6';
import { ejercicio7 } from './Components/Ejercicio7';
import { ejercicio8 } from './Components/Ejercicio8';
import { ejercicio9 } from './Components/Ejercicio9';
import { ejercicio10 } from './Components/Ejercicio10';
//--------FUNCIONES EXTRAS---------------------



//------------FUNCIONES EJERCICIOS-------------


function App() {

  return (
    <>
      <h1>Taller 1</h1>
      <h2>Ejercicio 1:</h2>
      <div>
        {ejercicio1()}
      </div>
      <h2>Ejercicio 2:</h2>
      <div>
        {ejercicio2()}
      </div>
      <h2>Ejercicio 3:</h2>
      <div>
        {ejercicio3()}
      </div>
    <h2>Ejercicio 4:</h2>
      <div>
        {ejercicio4()}
      </div>
    <h2>Ejercicio 5:</h2>
      <div>
        {ejercicio5()}
      </div>
    <h2>Ejercicio 6:</h2>
      <div>
        {ejercicio6()}
      </div>
    <h2>Ejercicio 7:</h2>
      <div>
        {ejercicio7()}
      </div>
    <h2>Ejercicio 8:</h2>
      <div>
        {ejercicio8()}
      </div>
    <h2>Ejercicio 9:</h2>
      <div>
        {ejercicio9()}
      </div>
      <h2>Ejercicio 10:</h2>
      <div>
        {ejercicio10}
      </div>
      <h2>Ejercicio 11:</h2>
      <div id='11'>
        {estudiante()}
      </div>
      <h2>Ejercicio 12:</h2>
      <div id='12'>
        {ejercicio12()}
      </div>
    </>
  );
}

export default App;
