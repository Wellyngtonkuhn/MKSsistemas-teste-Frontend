import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;

        a{
            text-decoration: none;
        }
    }
`;

export const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: auto;
`;
