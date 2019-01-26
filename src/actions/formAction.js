const formChangeAction = payload => (dispatch) => {
  dispatch({
    type: 'FORM_CHANGE',
    payload,
  });
};

export default formChangeAction;
