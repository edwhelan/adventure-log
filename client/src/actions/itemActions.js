import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING, UPDATE_ITEM_ASSIGNED } from '../actions/types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items')
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
    }))
};
export const addItems = (item) => dispatch => {
  axios.post('/api/items', item)
    .then(res => dispatch({
      type: ADD_ITEMS,
      payload: res.data
    }))
};
export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    })
};

export const updateItemAssigned = (id, assigned) => dispatch => {
  axios.put(`/api/items/${id}`, assigned)
    .then(res => {
      dispatch({
        type: UPDATE_ITEM_ASSIGNED,
        payload: res.data
      })
    })
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}