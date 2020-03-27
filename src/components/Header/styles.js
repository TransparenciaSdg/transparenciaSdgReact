import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`

  margin-top: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  display: flex;
  max-width:600px;
  justify-content: space-between;
  align-items: center;
  align-self: center;
 
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: 0px 5px 15px black ;
  }
  
  nav {
    flex-direction: row;
    display: flex;
    align-items: flex-start;

    a { 
      font-weight: bold;
      padding-left: 15px;
      margin-left: 15px;
      color: #eee;
      font-size: 15px;
      text-shadow: 10px 10px 15px black ;

      &:hover {
        color: ${darken(0.03, '#1f8ef1')};
      }
    }
  }


@media screen and (max-width: 700px){
      flex-direction: row;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
      
      nav {
        flex-direction: column;
        display: flex;
        align-items: flex-start;

        a { 
          padding-left: 15px;
          margin-left: 15px;
         
          color: #eee;
          font-size: 15px;

          & + a {
            padding-top: 10px;
          }
        }
      }
    }


@media screen and (max-width: 400px){
      flex-direction: row;
      display: flex;
      align-items: center;
    }
  
`;


