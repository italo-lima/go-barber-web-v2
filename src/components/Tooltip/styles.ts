import styled from "styled-components"

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 10px);
    width: 180px;
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
  `;
