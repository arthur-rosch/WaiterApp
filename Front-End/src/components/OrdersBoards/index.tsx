import { Board, OrdersContainer } from './styles';

import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrderBoardsProps {
  icon: string,
  title: string,
  order: Order[];
}

export function OrdersBoards({ icon, title, order }: OrderBoardsProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function HandleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function HandleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={HandleCloseModal} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>
      {order.length > 0 && (
        <OrdersContainer>
          {order.map(order => {
            return (
              <button type="button" key={order._id} onClick={() => HandleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
