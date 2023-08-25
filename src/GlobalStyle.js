import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    font-family: 'Montserrat', sans-serif;
}

:root {
    --title-big: 60px;
    --title-medium: 46px;
    --title-small: 35px;
    --body-big: 27px;
    --body-medium: 18px;
    --body-small: 16px;
    --body-smaller: 12px;
    --button: 21px;

    --color-primary: #2A7AE4;
    --color-active: #4F92EB;

    --color-frontend: #6BD1FF;
    --color-backend: #00C86F;
    --color-mobile: #FFBA05;
    --color-ux: #DC6EBE;
    --color-infra: #9CD33B;
    --color-marketing: #6B5BE2;
    --color-inovation: #FF8C2A;
    --color-data-science: #A23BD3;

    --color-black-dark: rgba(0, 0, 0, 0.90);
    --color-black-medium: rgba(0, 0, 0, 0.60);
    --color-black-light: rgba(0, 0, 0, 0.50);
    --color-black-lighter: #9E9E9E;

    --color-gray-dark: #C2C2C2;
    --color-gray-medium: #E5E5E5;
    --color-gray-light: #F5F5F5;

    --color-white: #FFF;

    --color-error-dark: #C62828;
    --color-error-medium: #E53935;
    --color-error-light: #FCE7E7;

}
`

export default GlobalStyle;