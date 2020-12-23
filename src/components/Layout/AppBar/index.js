import { useState } from 'react'

import { ContainerBar, EnterpriseList, NotFound } from './styles'
import Search from '../../General/Search'
import { useHistory } from 'react-router-dom'

function AppBar({ searching }) {

  const history = useHistory()
  const [enterprises, setEnterprises] = useState([])

  function items(e) {
    setEnterprises(e)
  }

  function redirect(id) {
    history.push(`/detail/${id}`)
  }

  return (
    <>
      <ContainerBar>
        <Search searching={(e) => searching(e)} items={(e) => items(e)} />
      </ContainerBar>
      {
        enterprises.length ?
        <EnterpriseList>
          {enterprises.map((enterprise, key) => (
            <li key={key} onClick={() => redirect(enterprise.id)}>
              <img src={`https://empresas.ioasys.com.br${enterprise.photo}`} alt="enterprise photo" />
              <div>
                <h2>{enterprise.enterprise_name}</h2>
                <h3>{enterprise.enterprise_type.enterprise_type_name}</h3>
                <h4>{enterprise.country}</h4>
              </div>
            </li>
          ))}
        </EnterpriseList> :
        <NotFound>Nenhuma empresa foi encontrada para a busca realizada.</NotFound>
      }
    </>
  )
}

export default AppBar
