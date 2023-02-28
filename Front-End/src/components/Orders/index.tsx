import { Container } from './styles';

import { OrdersBoards } from '../OrdersBoards';

import { Order } from '../../types/Order';

const order: Order[] = [{
  '_id': '63fe2b541e9101b353296d69',
  'table': '12',
  'status': 'WAITING',
  'products': [
    {
      'product': {
        'name': 'Pizza quatro queijos',
        'imagePath': '1677523036900-quatro-queijos.png',
        'price': 40,
      },
      'quantity': 2,
      '_id': '63fe2b541e9101b353296d6a'
    },
  ]
}];


export function Orders() {
  return (
    <Container>
      <OrdersBoards
        icon="⏱"
        title="Fila de espera"
        order={order}
      />
      <OrdersBoards
        icon="👩‍🍳"
        title="Em preparação"
        order={[]}
      />
      <OrdersBoards
        icon="✅"
        title="Finalizado"
        order={[]}
      />
    </Container >
  );
}
