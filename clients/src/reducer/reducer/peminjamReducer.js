import { GET_PEMINJAM, SET_LOADING, GET_NAMA_ANGGOTA } from "../types"

export default (state, action) => {
  switch (action.type) {
    case GET_NAMA_ANGGOTA:
      return {
        ...state,
        loading: false,
        nama: action.data
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PEMINJAM:
      return {
        ...state,
        peminjam: action.data,
        loading: false
      }
    default:
      return state
  }
}
