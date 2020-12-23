import styled from 'styled-components'

import icoSearch from '../../../assets/ico-search.svg'
import icoClose from '../../../assets/ico-close.svg'

const mainColor = ({ color }) => color || '#fff';

export const ContainerBar = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid ${mainColor};
  padding: 15px 80px;

  font-family: 'Roboto-regular', Oxygen, sans-serif;
  font-size: ${({ fontSize }) => fontSize || 1}rem;
  color: ${mainColor};

  &::placeholder {
    color: #991237;
  }
`

export const Find = styled.button`
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 60px;
  height: 60px;
  mask-image: url(${icoSearch});
  mask-size: cover;
  background-color: ${mainColor};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(45deg);
  }
`

export const Close = styled(Find)`
  left: unset;
  right: 10px;
  bottom: 5px;
  mask-image: url(${icoClose});

  &:hover {
    transform: rotate(20deg);
  }
`
