import styled from 'styled-components';

export const Container = styled.header`
  height: 12.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #D73035;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageDetails = styled.div`
  h1{
    color: #fff;
    font-size: 2rem;
  }

  h2{
    color: #fff;
    opacity: 0.9;
    font-size: 1rem;
    font-weight: 400;

    margin-top: 0.375rem;
  }
`;
