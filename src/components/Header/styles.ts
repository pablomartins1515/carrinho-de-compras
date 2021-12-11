import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &:first-of-type {
      font-weight: bold;
      font-size: 32px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff; 

      img {
        margin-left: 16px;  
      }

      @media(max-width: 768px) {
        font-size: 20px;

        img {
          margin-left: 8px;
          width: 40px; 
        }
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #ccc;
    }
  }
`;
