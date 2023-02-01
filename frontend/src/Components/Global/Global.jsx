import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        --color-background: #ffffff;
        --color-letters: #151515;
        --color-buttons: #00ccf5;
        --color-purchase: #357b87;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Fira Code', monospace;
        background: rgb(209,208,232);
        background: linear-gradient(90deg, rgba(209,208,232,1) 0%, rgba(249,249,255,1) 87%, rgba(0,204,245,1) 100%); 
        color: var(--color-buttons);      
    }
    :root {
        --toastify-toast-min-height: 30px;
    }

`;

export { Global };
