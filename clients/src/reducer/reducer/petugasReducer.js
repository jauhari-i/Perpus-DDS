import { GET_PETUGAS, SET_LOADING } from "../types"
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PETUGAS:
      return {
        ...state,
        petugas: action.data,
        loading: false
      }
    default:
      return state
  }
}
