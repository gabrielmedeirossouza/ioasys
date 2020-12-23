
/*
* Context criado originalemente para fazer o controle de autenticação das rotas
* Como foi substituido por um simples storage, deixo aqui apenas esse código como exemplo...
*/

import { createContext, useState, useContext } from 'react'

const AuthenticationContext = createContext()

export default function AuthenticationProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false)

  return (
    <AuthenticationContext.Provider
      value={{
        authenticated,
        setAuthenticated
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext)
  const { authenticated, setAuthenticated } = context;

  return {
    authenticated,
    setAuthenticated
  }
}
