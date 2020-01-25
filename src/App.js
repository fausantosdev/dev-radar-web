import React, { useState, useEffect } from 'react';

import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/Devitem'
import DevForm from './components/DevForm'
function App() {
  /*
  const [counter, setCounter] = useState(0)// Parâmetro = Valor inicial.
  function incCount() {
    setCounter(counter + 1)
  }*/
  const [devs, setDevs] = useState([])

  // Dispara uma função uma úniac vez durante a renderização do componente
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleSubmit(data) {
    //e.preventDefault()// Evitar o comportamento padrão do formulário de enviar para outra tela.

    const response = await api.post('/devs', data)

    //console.log(response.data)
    console.log(response.data)
    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (// Parenteses declaram o retorno* da função, chaves declaram o corpo* da função, seria o mesmo que { return() }
            <DevItem key={dev._id/* Pois agora ele é o primeiro elemento */} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

// <></> : fragment
