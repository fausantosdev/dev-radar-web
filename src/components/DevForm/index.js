import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position)
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      }, {
      timeout: 30000
    }
    )
  }, [])

  async function handleSubmit(e) {// Recebe esta função do componente pai, e irá executa-la
    e.preventDefault()

    await onSubmit({// Executa a função do componente pai, envia os dados para ela
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithubUsername('')
    setTechs('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)} />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)/* Armazena o valor do input dentro do estado. */} />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            name="latitude"
            id="latitude"
            value={latitude}
            required
            onChange={e => setLatitude(e.target.value)} />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            name="longitude"
            id="longitude"
            value={longitude}
            required
            onChange={e => setLongitude(e.target.value)} />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  )
}

export default DevForm