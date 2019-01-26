const simpleAction = payload => (dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload,
  });
};

export default simpleAction;
