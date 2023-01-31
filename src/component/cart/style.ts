import styled from "styled-components";

export const CartSection = styled.div`
  min-height: 64vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0f52ba;

  @media screen and (min-width: 375px) {
    width: 20.375rem;
  }

  @media screen and (min-width: 1024px) {
    width: 30.375rem;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 1.688rem;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    color: #fff;
  }

  .btnCloseCart {
    font-size: 2.75rem;
    font-weight: 400;
    background-color: #000;
    color: #0f52ba;
    border: none;
    width: 45.92px;
    height: 45.92px;
    border-radius: 50%;
    line-height: 15px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 2.938rem;
    padding-left: 0;

    .btnCloseCart {
      font-size: 1.75rem;
      color: #fff;
      transition: all ease 0.3s;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const CartContent = styled.div`
  width: 100%;
  min-height: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15.625rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 1.399rem 0;
  margin-left: 2.125rem;
  margin-bottom: 0.809rem;
  position: relative;

  .btnRemove {
    position: absolute;
    right: 5.6%;
    top: 3.14%;
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 17px;
    color: #000;
    background-color: transparent;
    border: none;
  }

  img {
    width: 5rem;
    height: 5.944rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    margin: 0.874rem 0 0.699rem 0;
  }

  .productInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 83%;

    .quantity {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 6.086rem;
      height: 2.156rem;
      background: #ffffff;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;

      button {
        background: transparent;
        border: none;
        font-weight: 400;
        line-height: 29px;
        font-size: 1.5rem;
        color: #000;
        transition: all ease 0.3s;

        :hover {
          cursor: pointer;
        }
      }

      p {
        border-left: 0.2px solid #bfbfbf;
        border-right: 0.2px solid #bfbfbf;
        padding: 0 10px;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 24.38px;
        color: #000;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      line-height: 15px;
      font-size: 0.938rem;
      color: #fff;
      background-color: #373737;
      border-radius: 5px;
      height: 2.176rem;
      width: 84px;
      transition: all ease 0.3s;

      :hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    width: 23.688rem;
    margin-left: 2.938rem;
    margin-bottom: 1.75rem;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

    .btnRemove {
      right: -5px;
      top: -6px;
      font-size: 0.875rem;
      color: #fff;
      background-color: #000;
      border-radius: 50%;
      padding-bottom: 2px;
      transition: all ease 0.3s;

      :hover {
        cursor: pointer;
      }
    }

    img {
      width: 2.875rem;
      height: 3.563rem;
    }

    h3 {
      width: 7.063rem;
    }

    .productInfo {
      width: unset;
      gap: 3rem;

      .quantity {
        display: block;
        position: absolute;
        top: 1.75rem;
        font-weight: 400;
        line-height: 6px;
        font-size: 0.313rem;
        color: #000;
      }

      div {
        width: 3.125rem;
        height: 1.188rem;

        button {
          font-size: 0.75rem;
          line-height: 14.63px;
        }

        p {
          font-size: 0.5rem;
          line-height: 9.75px;
          padding: 0 7px;
        }
      }

      .price {
        font-weight: 700;
        line-height: 17px;
        font-size: 0.875rem;
        color: #000;
        background-color: #fff;
        border-radius: unset;
        width: unset;
        height: unset;
      }
    }
  }
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: sticky;
  bottom: 0;
  width: 20.375rem;
  background-color: #0f52ba;
  height: 10.241rem;

  h3 {
    width: 15.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 15px;
    margin-left: 2.125rem;
    color: #fff;
  }

  button {
    width: 100%;
    height: 4.116rem;
    background-color: #000;
    border: none;
    font-weight: 700;
    line-height: 15px;
    font-size: 1.25rem;
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    h3 {
      width: unset;
      margin-left: 0;
      padding-left: 2.938rem;
      padding-right: 3.938rem;
    }

    button {
      font-size: 1.75rem;
      transition: all ease 0.3s;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
