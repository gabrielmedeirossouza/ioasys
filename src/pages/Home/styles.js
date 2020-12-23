import styled from 'styled-components'

import searchIco from '../../assets/ico-search.svg';

export const ContainerHome = styled.div`
  background-image: linear-gradient(173deg, #ED4B76 23%, #CA406B 66%);
  padding: 64px 40px 20px 40px;

  div {
    text-align: center;
    justify-content: center;

    img {
      width: 230px;
    }

    button {
      all: unset;
      position: absolute;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      right: 20px;
      top: 80px;
      background-image: url(${searchIco});
      transition: transform .2s;
      cursor: pointer;

      :hover {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  h2 {
    position: absolute;
    transform: translate(-50%, -50%);
    top: calc(50% + 100px);
    left: 50%;
    font-family: 'Roboto-regular', Oxygen, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: var(--charcoal-grey);
  }
`
