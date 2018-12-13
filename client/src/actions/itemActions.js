import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};