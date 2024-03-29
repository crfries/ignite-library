import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }

        &::-webkit-scrollbar-track {
            background: #fff;
        }
    }

    body {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #666;
    }

    h1{
        font-size: 3rem;
        color: #333;
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }

    img {
        display: block;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #666;
    }


`;

export default GlobalStyles;
