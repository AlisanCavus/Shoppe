import styled from "styled-components";


const Container = styled.div`
    height: 80vh;
    background: rgb(255,232,130);
    background: linear-gradient(180deg, rgba(255,232,130,1) 0%, rgba(230,227,45,1) 50%, rgba(255,232,130,1) 100%);

    animation-name: fad;
    animation-duration: 2s;
    
    @keyframes fad {
        from {opacity:0; }
        to{opacity:1; }
    }


`;




export default Container;