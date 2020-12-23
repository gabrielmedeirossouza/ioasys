import styled from 'styled-components'
import PropTypes from 'prop-types'

import Lmail from '../../assets/ico-mail.svg'
import Lpadlock from '../../assets/ico-padlock.svg'
import Leye from '../../assets/ico-eye.svg'
import LeyeOff from '../../assets/ico-eye-off.svg'

const password = ({ isVisible }) => isVisible ? Leye : LeyeOff

export const StyledForm = styled.form`
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 350px;
  top: 50%;
  left: 50%;
  align-items: center;
  text-align: center;

  img {
    width: 295px;
    margin-bottom: 64px;
  }

  h2 {
    font-family: 'Roboto-Bold', Oxygen, sans-serif;
    font-size: 1.6rem;
    color: var(--charcoal-grey);
    margin-bottom: 25px;
  }

  h3 {
    font-family: 'Roboto-regular', Oxygen, sans-serif;
    font-size: 1.1rem;
    font-weight: normal;
    color: var(--charcoal-grey);
    line-height: 1.48;
    margin-bottom: 46px;
  }
`

export const StyledInput = styled.div`
  position: relative;
  border-bottom: 1px solid var(--charcoal-grey);
  margin-bottom: 32px;
  width: 100%;

  &::before, &::after {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    width: 26px;
    height: 26px;
    bottom: 1px;
    left: 0;
  }

  &.email::before {
    background-image: url(${Lmail});
  }

  &.password::before {
    background-image: url(${Lpadlock});
  }

  input {
    all: unset;
    width: 100%;
    padding: 0 40px;
    font-family: 'Roboto', Oxygen, sans-serif;
    font-size: 1.4rem;
    color: var(--charcoal-grey);
    text-align: left;
  }

  input:-internal-autofill-selected {
    background-color: transparent!important;
  }

  .passEye {
    position: absolute;
    background-image: url(${password});
    background-repeat: no-repeat;
    background-size: cover;
    width: 26px;
    height: 26px;
    bottom: 1px;
    right: 0;
    cursor: pointer;
  }
`

StyledInput.propTypes = {
  isVisible: PropTypes.oneOf([true, false])
}
