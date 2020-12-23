import { Redirect, Route } from 'react-router-dom'

export function PrivateRoute ({ component: Component, ...rest }) {

  const authenticated = localStorage.getItem('isAuthenticated')

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
