import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import { ContainerDetail, DetailModal } from './styles'

function Detail() {

  const history = useHistory()
  const [enterprise, setEnterprise] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://empresas.ioasys.com.br/api/v1/enterprises/${id}`,
      headers: {
        'access-token': localStorage.getItem('access_token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    }).then(resp => {
      setEnterprise(resp.data.enterprise)
      console.log(resp)
    }).catch(() => {
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
        <img src={"https://empresas.ioasys.com.br" + enterprise.photo} alt="enterprise photo" />
        <p>{enterprise?.description || 'Carregando...'}</p>
      </DetailModal>
    </>
  )
}

export default Detail
