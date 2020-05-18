import styled, {keyframes} from "styled-components"
import BackgroundImg from '../../assets/sign-in-background.png';
import { shade } from "polished"

//transição para aparecer o form
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

    form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 25px;
    }

    a{
      color: #f4ede8;
      display: block;
      margin-top: 25px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")}
      }
    }
  }

  > a{
      color: #ff9000;
      display: block;
      margin-top: 25px;
      transition: color 0.3s;
      display: flex;
      align-items: center;

      svg {
        margin-right: 15px;

      }

      &:hover {
        color: ${shade(0.2, "#ff9000")}
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;

