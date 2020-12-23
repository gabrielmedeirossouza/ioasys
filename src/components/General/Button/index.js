import { StyledButton } from './styles'

function Button({ children }) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button
