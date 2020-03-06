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
    default:
      return state
  }
}
