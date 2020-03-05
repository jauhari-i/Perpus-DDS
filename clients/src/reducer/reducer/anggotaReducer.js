import React from "react"
import {
  DELETE_ANGGOTA,
  GET_ANGGOTA,
  ADD_ANGGOTA,
  EDIT_ANGGOTA
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case GET_ANGGOTA:
      return {
        ...state,
        data: action.data
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
