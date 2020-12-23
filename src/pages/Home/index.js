import { useState } from 'react'

import { ContainerHome } from './styles'
import AppBar from '../../components/Layout/AppBar'

import logo from '../../assets/logo-ioasys-white.png'

function Home() {

  const [isSearch, setIsSearch] = useState(false)

  function searching(e) {
    e !== undefined ? setIsSearch(e) : setIsSearch(true)
  }

  return (
    <>
      {
        isSearch ?
          <AppBar searching={(e) => searching(e)} />
        :
          <ContainerHome>
            <div>
              <img src={logo} alt="logo" />
              <button onClick={searching} />
            </div>
            <h2>Clique na busca para iniciar.</h2>
          </ContainerHome>
      }
    </>
  )
}

export default Home
