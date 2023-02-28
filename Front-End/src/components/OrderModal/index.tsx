import {
  Overlay,
  ModalBody,
  StatusContainer,
  OrderDetails,
  OrderItem,
  Item,
  Quantity,
  DetailsProduct,
  Total,
  Actions,
  Primary,
  Cancel
} from './styles';

import closeIcon from '../.././assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { useTotal } from '../../hooks/useTotal';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean
  order: Order | null
  onClose: () => void
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {

  useEffect(() => {
    function HandleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', HandleKeyDown);

    return () => {
      document.removeEventListener('keydown', HandleKeyDown);
    };

  }, [onClose]);

  const total = useTotal(order);

  if (!visible || !order) {
    return null;
  }
  else {
    return (
      <Overlay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>
            <button type="button" onClick={onClose}>
              <img src={closeIcon} alt="Ícone de fechar" />
            </button>
          </header>
          <StatusContainer>
            <small>Status do pedido</small>
            <div>
              <span>
                {order.status === 'WAITING' && '⏱'}
                {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                {order.status === 'DONE' && '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Fila de espera'}
                {order.status === 'IN_PRODUCTION' && 'Em preparação'}
                {order.status === 'DONE' && 'Finalizado'}
              </strong>
            </div>
          </StatusContainer>
          <OrderDetails>
            <strong>Itens</strong>
            <OrderItem>
              {order.products.map(({ _id, product, quantity }) => (
                <Item key={_id}>
                  <img
                    width={56}
                    height={28.51}
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                  />
                  <Quantity>{quantity}x</Quantity>
                  <DetailsProduct>
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </DetailsProduct>
                </Item>
              ))}
            </OrderItem>
            <Total>
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </Total>
          </OrderDetails>
          <Actions>
            <Primary type="button">
              <span>👩‍🍳</span>
              <strong>Iniciar Produção</strong>
            </Primary>
            <Cancel type="button">Cancelar pedido</Cancel>
          </Actions>
        </ModalBody>
      </Overlay>
    );
  }

}
