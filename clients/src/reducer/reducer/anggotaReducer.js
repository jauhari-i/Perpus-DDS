import React from "react"
import { DELETE_DATA, GET_ANGGOTA, ADD_ANGGOTA } from "../types"

export default (state, action) => {
  switch (action.type) {
    case DELETE_DATA:
      return {
        ...state,
        data: action.data
      }
    case GET_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    case ADD_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
