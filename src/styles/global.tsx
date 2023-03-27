import { createGlobalStyle } from 'styled-components'
// import font from '../fonts/font.otf'


export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #fafafac0;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #0E4065;
        --bluck: #11111f
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff
    }
    @font-face {
        font-family: 'Cormorant';
        src: local('Cormorant'),
        url("../fonts/font.otf") format('opentype');
        font-weight: 300;
        font-style: normal;
        }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiiased;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        position: relative;
        padding: 3rem
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover {
            filter: brightness(0.7)
        }
    }

`