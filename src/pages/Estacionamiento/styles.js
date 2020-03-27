import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height:100%;
    width: 100%;

    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;


    h3 {
      padding-top: 15px;
      font-weight: bold;
      align-self:center;
      font-size: 25px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
   }
  
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;

        ul {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 15px;
      }
  }

`;
