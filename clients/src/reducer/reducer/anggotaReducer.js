import React from "react"
import { GET_ANGGOTA } from "../types"

export default (state, action) => {
  switch (action.type) {
    case GET_ANGGOTA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
