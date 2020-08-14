const actions = {
  INIT_SOCKET_PRICE: 'INIT_SOCKET_PRICE',
  FETCH_PRICE: 'FETCH_PRICE',
  PRICE_UNSUBSCRIBED: 'PRICE_UNSUBSCRIBED',
  PRICE_CHANNEL_ERROR: 'PRICE_CHANNEL_ERROR',
  PRICE_OBJECT_UPDATED: 'PRICE_OBJECT_UPDATED',
  SET_PRICE_CHANNEL: 'SET_PRICE_CHANNEL',
  initLiveQueryPrice: () => ({
    type: actions.INIT_SOCKET_PRICE,
  }),
};

export default actions;
