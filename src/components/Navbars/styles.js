import styled from 'styled-components';


export const List = styled.ul`

    list-style: none;
    margin-top: 30px;
    background: #70BD82;
    border-radius: 10px;
    padding-left: 5px;

    li{
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      align-items: center;

      & + li {
        border-top: 1px solid #eee;
      }

      a{
        color: #7159c1;
        text-decoration: none;
      }
    }

`;
