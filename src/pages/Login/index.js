import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/Api'

import Button from '../../components/General/Button'
import Loading from '../../components/Layout/Loading'

import { StyledForm, StyledInput } from './styles'
import IoasysImg from '../../assets/logo-ioasys-purple.png'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    setLoading(true)

    // "testeapple@ioasys.com.br"
    // "12341234"
    api.post('/users/auth/sign_in', {
      email: email,
      password: password
    })
    .then(resp => {
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('access-token', resp.headers['access-token'])
      localStorage.setItem('client', resp.headers.client)
      localStorage.setItem('uid', resp.headers.uid)

      // Apenas para dar um delay para a tela de loading ficar mais visível...
      setTimeout(() => {
        setLoading(false)

        history.push('/')
      }, 1000)
    })
    .catch(err => {
      setLoading(false)
      localStorage.removeItem('isAuthenticated')
      console.log(`Login service error: ${err}`)
    })
  }

  function toggle() {
    setVisible(!visible)
  }

  return (
    <>
    {
    loading ? <Loading />
    : <StyledForm onSubmit={handleLogin}>

        <img src={IoasysImg} alt="ioasys logo" />
        <h2>BEM-VINDO AO <br/>EMPRESAS</h2>
        <h3>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</h3>

        <StyledInput
          className="email"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledInput>

        <StyledInput
          className="password"
          isVisible={visible}
        >
          <input
            type={visible ? "text" : "password"}
            maxLength="20"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="passEye"
            onClick={() => toggle()}
          />
        </StyledInput>

        <Button>ENTRAR</Button>

      </StyledForm>
    }
    </>
  )
}

export default Login
