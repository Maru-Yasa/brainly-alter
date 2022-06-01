import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html,
    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .my-bg{
        background-color: ${({theme}) => theme.background};
    }

    .my-text{
        color: ${({theme}) => theme.text};
    }

    .text-blue{
        color: ${({theme}) => theme.textBlue} !important;
    }

    .bg-blue{
        background-color: ${({theme}) => theme.textBlue} !important;
    }

    .my-brand{
        font-size: 70px;
    }

    .form-control{
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.textBlue};
        border: 0;
    }

    .form-control:focus{
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.textBlue};
        
    }

    .my-loading{
        background: ${({theme}) => theme.textBlue};
        border-radius: 30px;
        width: 50px;
        height: 50px;
    }

    .btn-blue{
        background-color: ${({theme}) => theme.textBlue};
        color: white;
    }

    .btn-blue:hover{
        background-color: ${({theme}) => theme.textBlue};
        color: white;
    }

    .my-shadow {
        -webkit-box-shadow: 10px 10px 58px 14px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 58px 14px rgba(0,0,0,0.1);
box-shadow: 10px 10px 58px 14px rgba(0,0,0,0.1);
    }

    .my-rounded {
        border-radius: 10px;
    }

    .np-box{
        border-radius: 50px;
        background: ${({theme}) => theme.body};
        box-shadow:  20px 20px 60px #afafaf,
                    -20px -20px 60px #ffffff;
    }

    .card-header:first-child{
        border-radius: inherit;
    }

    .author-avatar{
        max-width: 25px;
        object-fit: cover;
        width: 100%;
        height: 25px;

    }

    .btn-outline-blue {
        background-color: ${({theme}) => theme.background};
        border-color: ${({theme}) => theme.textBlue};
        color: ${({theme}) => theme.textBlue};
    }

    .btn-outline-blue:hover {
        background-color: ${({theme}) => theme.textBlue};
        border-color: ${({theme}) => theme.textBlue};
        color: white;
    }

    .btn-outline-blue:focus {
        background-color: ${({theme}) => theme.textBlue};
        border-color: ${({theme}) => theme.textBlue};
        color: white;
    }

    .dropdown-menu {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }

    .dropdown-item {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }

    .dropdown-item:hover {
        background-color: ${({theme}) => theme.textBlue};
        color: white;
    }

    .back {
        cursor: pointer;
    }

    .back:hover {
        color: ${({theme}) => theme.textBlue};
    }


`

export default GlobalStyles