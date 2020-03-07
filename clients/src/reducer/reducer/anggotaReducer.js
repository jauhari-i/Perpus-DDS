import React from "react"
import { GET_ANGGOTA, SET_LOADING } from "../types"

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ANGGOTA:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case DELETE_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    case ADD_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    case EDIT_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
