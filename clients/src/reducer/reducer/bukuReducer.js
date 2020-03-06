import {
  GET_BUKU,
  ADD_BUKU,
  EDIT_BUKU,
  DELETE_BUKU,
  SET_LOADING
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case GET_BUKU:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case DELETE_BUKU:
      return {
        ...state,
        data: action.data
      }
    case ADD_BUKU:
      return {
        ...state,
        data: action.data
      }
    case EDIT_BUKU:
      return {
        ...state,
        data: action.data
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
