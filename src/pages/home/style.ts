import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;

  @media screen and (min-width: 1440px) {
    margin-top: 7.25rem;
    margin-bottom: 7.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  // Desktop
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: 58.625rem;
    margin: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15.656rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding-top: 1.125rem;

  img {
    height: 9.875rem;
  }

  .productDetails {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 90%;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      color: #2c2c2c;
      width: 8.923rem;
    }
    p {
      text-align: center;
      font-weight: 700;
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
    text-align: left;
    width: 90%;
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

  // Desktop
  @media screen and (min-width: 1024px) {
    width: 13.598rem;
    height: 17.813rem;
    transition: all ease 0.3s;

    :hover {
      cursor: pointer;
    }

    img {
      height: 8.625rem;
    }

    .productDetails {
      height: 2.375rem;

      h3 {
        width: 7.75rem;
      }

      p {
        padding: 4px 7px;
      }
    }

    .description {
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    button {
      transition: all ease 0.3s;
      height: 1.994rem;
    }

    button:hover {
      cursor: pointer;
    }
  }

  // Loading
  .loading {
    background: rgb(200, 194, 194);
    background: linear-gradient(
      90deg,
      rgb(200 194 194 / 11%) 6%,
      rgb(122 120 120 / 14%) 49%,
      rgb(0 0 0 / 10%) 91%
    );
    background-size: 300% 300%;
    animation: colors 5s ease infinite;
  }

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .image {
    width: 7.988rem;
    height: 9.875rem;
    margin-bottom: 1rem;
  }

  .priceName {
    display: flex;
    gap: 1rem;
    height: 2.733rem;
    width: 90%;
    margin-bottom: 1rem;

    div:nth-child(1) {
      width: 55%;
    }
    div:nth-child(2) {
      width: 45%;
    }
  }

  .descriptionLoading {
    width: 90%;
    height: 1.798rem;
    margin-bottom: 1rem;
  }
`;
