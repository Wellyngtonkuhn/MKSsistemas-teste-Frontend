import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  min-height: 75vh;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.656rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  img {
    height: 9.875rem;
  }

  .productDetails {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      color: #2c2c2c;
      width: 10ch;
    }
    p {
      text-align: center;
      font-family: 700;
      font-size: 0.938rem;
      background-color: #373737;
      border-radius: 5px;
      color: #fff;
      padding: 5px 13px;
    }
  }

  .description {
    font-weight: 300;
    line-height: 12px;
    font-size: 0.625rem;
    color: #2c2c2c;
    text-align: center;
  }

  button {
    width: 100%;
    height: 2.295rem;
    background-color: #0f52ba;
    color: #fff;
    border: none;
    border-radius: 0px 0px 8px 8px;
    font-weight: 700;
    line-height: 18px;
    font-size: 0.875rem;
  }
`;
