import styled, { css } from "styled-components";

import Tooltip from '../Tooltip';

interface ContainerProps {
   isFocused: boolean;
   isFilled: boolean;
   isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
       border-radius: 10px;
       border: 2px solid white;
       background: white;
       padding: 13px;
       width: 100%; 
       color:#666360;

       display: flex;
       align-items: center;

       & + div {
          margin-top: 8px;
       }

       ${props =>props.isErrored && css`
          border-color: #c53030;
          color: blue;
       `}

       ${props => props.isFocused && css `
         color: #A6ACFA;
         border-color: #01CDB8;
       `}

       ${props => props.isFilled && css `
         color: #A6ACFA;
       `}

    input{

       flex:1;
       background: transparent;
       border:0;
       outline: none;

       &::placeholder{
          color:#666360;
       }

       & + input {
          margin-top:8px;
       }

      }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;