import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #0f52ba;

  // Desktop
  @media screen and (min-width: 1024px) {
    height: 6.3125rem;
  }
`;

export const Logo = styled.div`
  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    position: relative;

    span {
      font-size: 1rem;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0px;
      position: absolute;
      left: 5rem;
      top: .3rem;
    }
  }

  // Desktop
  @media screen and (min-width: 1024px) {
    h1 {
      color: #fff;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
 
      span {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0px;
        left: 6.3rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 100%;

   // Desktop
  @media screen and (min-width: 1024px) {
    padding: 0 4.0625rem;
  }
`;

export const Cart = styled.div`
  width: 3.25rem;
  height: 1.625rem;
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 0.68625rem;
    width: 0.65rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 14.63px;
    letter-spacing: 0em;
    color: #000;
  }
  
  // Desktop
  @media screen and (min-width: 1024px) {
    width: 5.625rem;
    height: 2.8125rem;

    img {
      height: 1.188125rem;
      width: 1.125rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 22px;
    }
  }
`;
