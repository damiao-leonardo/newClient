import styled from "styled-components";
import {transparentize} from 'polished';

export const Container = styled.header`
  background: ${transparentize(0.4, '#ffffff')};
`;

export const Content = styled.div`
 max-width: 1120px;
 margin: 0 auto;
 padding: 0.6rem 1.2rem 0.4rem;
 display: flex;
 align-items: center;
 justify-content: space-between;

 img{
     width: 100px;
     height: 65px;
 }

 a{
     display: flex;
     text-decoration: none;
     color: var(--shape);
     background: ${transparentize(0.3, '#01CDB8')};
     border: 0;
     padding: 0 1.5rem;
     border-radius: 0.25rem;
     height: 2.5rem;

     transition: filter 0.2s;

     &:hover{
         filter: brightness(0.9)
     }

     span{
        font-size: 0.9rem;   
        margin:auto 0;
     }
 }

`;

