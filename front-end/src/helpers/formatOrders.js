import dataTestIds from '../dataTestIds';

const serialize = (order) => ({
  id: order.id,
  status: order.status,
  saleDate: order.sale_date,
  deliveryAddress: order.delivery_address,
  totalPrice: order.total_price,
});

const ordersDataTestIds = {
  sellerOrders: {
    id: dataTestIds[48],
    status: dataTestIds[49],
    sale_date: dataTestIds[50],
    total_price: dataTestIds[51],
    delivery_address: dataTestIds[52],
  },
  customerOrders: {
    id: dataTestIds[33],
    status: dataTestIds[34],
    sale_date: dataTestIds[35],
    total_price: dataTestIds[36],
    delivery_address: 'none',
  },
};

const formatOrders = (orders, page) => (orders.map((order) => ({
  id: {
    text: order.id,
    dataTestId: ordersDataTestIds[page].id,
  },
  status: {
    text: order.status,
    dataTestId: ordersDataTestIds[page].status,
  },
  sale_date: {
    text: order.sale_date,
    dataTestId: ordersDataTestIds[page].sale_date,
  },
  total_price: {
    text: order.total_price,
    dataTestId: ordersDataTestIds[page].total_price,
  },
  delivery_address: {
    text: order.delivery_address,
    dataTestId: ordersDataTestIds[page].delivery_address,
  },
})).map(serialize)
);

export default formatOrders;
