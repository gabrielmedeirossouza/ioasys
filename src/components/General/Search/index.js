import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  ContainerBar,
  Input,
  Find,
  Close
} from './styles'

function Search({ items, searching }) {

  const history = useHistory()
  const [name, setName] = useState('')

  function search(e) {
    e.preventDefault()

    axios({
      method: 'get',
      url: 'https://empresas.ioasys.com.br/api/v1/enterprises',
      headers: {
        'access-token': localStorage.getItem('access_token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      },
      params: {
        name: name
      }
    }).then(resp => {
      items(Object.values(resp.data.enterprises) || [])
    }).catch(() => {
      localStorage.clear()
      history.push('/login')
    })
  }

  function close(e) {
    e.preventDefault()
    searching(false)
  }

  return (
    <ContainerBar>
      <form>
        <Input
          placeholder="Pesquisar"
          fontSize={2}
          onChange={(e) => setName(e.target.value)}
        />
        <Find type="submit" onClick={(e) => search(e)} />
        <Close onClick={(e) => close(e)} />
      </form>
    </ContainerBar>
  )
}

export default Search
