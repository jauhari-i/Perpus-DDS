import { GET_PETUGAS, SET_LOADING, GET_NAMA_PETUGAS } from "../types"
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_NAMA_PETUGAS:
      return {
        ...state,
        nama: action.data,
        loading: false
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
