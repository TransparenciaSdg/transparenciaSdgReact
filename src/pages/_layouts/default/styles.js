import styled from 'styled-components';



export const Wrapper = styled.div`
  
  flex: 1;
  margin-top: 10px;
  flex-direction:column;
  display: flex;
  height:100%;
    width: 100%;
  
  @media screen and (max-width: 500px){
    margin-top: 10px;
  }

`;


export const Container = styled.div`
  height:100%;
  width: 100%;
  box-shadow: 0px 0px 15px black inset;


  @media screen and (max-width: 500px){
    box-shadow: 0px 0px 15px black inset;
  }
`;

