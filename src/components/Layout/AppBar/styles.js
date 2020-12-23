import styled from 'styled-components'

export const ContainerBar = styled.div`
  background-image: linear-gradient(173deg, #ED4B76 23%, #CA406B 66%);
  padding: 64px 40px 20px 40px;
`

export const EnterpriseList = styled.ul`
  width: 100%;
  padding: 0 50px;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 40px 0;
    background-color: var(--white-two);
    border-radius: 5px;
    cursor: pointer;
    transition: transform .2s;

    :hover {
      transform: scale(1.02);
    }

    img {
      margin: 30px;
    }

    div {
      h2, h3, h4 {
        margin: 10px 0;
      }

      h2 {
        font-family: 'Roboto-bold', Oxygen, sans-serif;
        font-size: 1.875rem;
        color: var(--dark-indigo);
      }

      h3 {
        font-family: 'Roboto-regular', Oxygen, sans-serif;
        font-size: 1.5rem;
        color: var(--warm-grey);
      }

      h4 {
        font-family: 'Roboto-regular', Oxygen, sans-serif;
        font-size: 1.125rem;
        color: var(--warm-grey);
      }
    }
  }
`

export const NotFound = styled.h2`
  position: absolute;
  transform: translate(-50%, -50%);
  top: calc(50% + 100px);
  left: 50%;
  font-family: 'Roboto-regular', Oxygen, sans-serif;
  font-size: 2.125rem;
  font-weight: 500;
  color: var(--greyish);
`
