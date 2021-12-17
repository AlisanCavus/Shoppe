import styled from "styled-components";

export const Header = styled.div`
top: 0;
left: 0;
width: 100%;
height: 10vh;
min-height: fit-content;
margin: auto;
background-color: #ffe882;
display: flex;
justify-content: evenly;

animation-name: fad;
animation-duration: 2s;

@keyframes fad {
    from {opacity:0; }
    to{opacity:1; }
}
`