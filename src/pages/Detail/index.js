import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/Api'

import { ContainerDetail, DetailModal } from './styles'

function Detail() {

  const history = useHistory()
  const [enterprise, setEnterprise] = useState({})
  const { id } = useParams()

  useEffect(() => {

    api.get(`/enterprises/${id}`)
    .then(resp => {
      setEnterprise(resp.data.enterprise)
    })
    .catch(() => {
      localStorage.clear()
      history.push('/login')
    })

  }, [history, id])

  function exit() {
    history.push('/')
  }

  return (
    <>
      <ContainerDetail>
        <button onClick={exit} />
        <h1>{enterprise.enterprise_name?.toUpperCase() || 'Carregando...'}</h1>
      </ContainerDetail>
      <DetailModal>
        <img src={`https://empresas.ioasys.com.br${enterprise.photo}`} alt="enterprise photo" />
        <p>{enterprise?.description || 'Carregando...'}</p>
      </DetailModal>
    </>
  )
}

export default Detail
