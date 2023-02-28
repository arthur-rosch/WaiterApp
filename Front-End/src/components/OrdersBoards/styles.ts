import styled from 'styled-components';

export const Board = styled.div`
  flex:1;
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 16px;
  border: 1px solid rgba(204,204,204, 0.4);

  > header{
    padding: 0.5rem;

    display: flex;
    align-items: center;

    gap: 0.5rem;
    font-size: 0.875rem;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;

  button{
    width: 100%;
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 0.5rem;
    border: 1px solid rgba(204,204,204, 0.4);

    gap: 0.25rem;
    background: #fff;

    strong {
      font-weight: 500;
    }
    span{
      color: #666;
      font-size: 0.875rem;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
