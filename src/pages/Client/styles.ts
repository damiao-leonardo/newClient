import styled from "styled-components";


export const Container = styled.main`

height: 100vh;
display: flex;
align-items: center;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 700px;


  h5{
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1rem 0;
  }

  form{
      width: 340px;
      margin:0 auto;

      button{
        width: 100%;
        height: 3rem;
        margin-top:10px;
        border-radius: 10px;
        border:0;
        background: var(--green);
        color: var(--shape);

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
        

      }
  }

`;

