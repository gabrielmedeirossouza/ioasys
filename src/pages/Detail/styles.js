import styled from 'styled-components'

import leftArrow from '../../assets/ico-arrow-left.svg'

export const ContainerDetail = styled.div`
  display: flex;
  background-image: linear-gradient(173deg, #ED4B76 23%, #CA406B 66%);
  padding: 80px 40px 35px 40px;

  button {
    all: unset;
    width: 35px;
    height: 38px;
    mask-image: url(${leftArrow});
    mask-size: cover;
    background-color: var(--white-two);
    cursor: pointer;
    transition: transform .2s;

    :hover {
      transform: scale(1.05) translateX(-20%);
    }
  }

  h1 {
    font-family: 'Roboto-regular', Oxygen, sans-serif;
    font-size: 2.125rem;
    font-weight: 500;
    color: var(--white-two);
    margin-left: 80px;
  }
`

export const DetailModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 100px);
  min-height: 500px;
  margin: 40px 0 0 50px;
  background-color: var(--white-two);
  border-radius: 5px;

  img {
    width: calc(100% - 150px);
    height: 300px;
    object-fit: cover;
    margin: 50px 75px;
    background-color: var(--white);
  }

  p {
    font-family: 'Roboto-regular', Oxygen, sans-serif;
    font-size: 2.125rem;
    color: var(--warm-grey);
    margin: 0 50px 75px 75px;
  }
`
