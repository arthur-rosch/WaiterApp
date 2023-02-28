import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;
export const ModalBody = styled.div`
  width: 30rem;
  padding:2rem;

  background: #fff;
  border-radius: 8px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 1.5rem;
    }

    button{
      border: 0;
      line-height: 0;
      background: transparent;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  small{
    opacity: 0.8;
    font-size: 0.875rem;
  }

  div{
    gap: 0.5rem;
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong{
    opacity: 0.8;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const  OrderItem= styled.div`
  margin-top: 1rem;
`;

export const Item = styled.div`
  display: flex;

  & + item {
    margin-top: 1rem;
  }

  img{
    border-radius: 6px;
  }
`;

export const Quantity = styled.span`
  margin-left: 0.75rem;

  color: #666;
  font-size: 0.875rem;

  display: block;
  min-width: 1.25rem;
`;

export const DetailsProduct = styled.div`
  margin-left: 0.25rem;

  strong{
    display: block;
    margin-bottom: 0.25rem;
  }

  span{
    color: #666;
    font-size: 0.875rem;
  }
`;

export const Total = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span{
    opacity: 0.8;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const Actions = styled.footer`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`;

const BaseButtonActions = styled.button`
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size:1rem;

  border: 0;
  border-radius: 48px;
`;

export const Primary = styled(BaseButtonActions)`
  color: #fff;
  background: #333;
`;

export const Cancel = styled(BaseButtonActions)`
  margin-top: 0.75rem;

  color: #D73035;
  font-weight: bold;
  background: transparent;
`;
