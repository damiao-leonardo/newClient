import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
     
    table{
        width: 100%;
        border-spacing: 0 0.3rem;

        th{
            font-size:0.9rem;
            color: var(--text-body);
            font-weight: 600;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1rem;
        }

        td{
           font-size:0.8rem;
           padding: 0.6rem 2rem;
           border: 0;
           background: var(--shape);
           color: var(--text-body);
           border-radius: 0.25rem;
          

           &:first-child{
               color: var(--text-title);
           }
        }

        button{
            display: flex;
            text-decoration: none;
            color: var(--shape);
            background: ${transparentize(0.3, '#01CDB8')};
            border: 0;
            padding: 0 0.8rem;
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
    }

    .not-text{
      text-align: center;
    }
`;


