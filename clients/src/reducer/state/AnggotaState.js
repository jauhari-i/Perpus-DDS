import React, { useReducer } from "react"
import anggotaContext from "../context/anggotaContext"
import anggotaReducer from "../reducer/anggotaReducer"
import { DELETE_DATA, GET_ANGGOTA, ADD_ANGGOTA } from "../types"

const AnggotaState = props => {
  let anggota = [
    {
      kode_anggota: "AG0123",
      nama_anggota: "Budi Permana",
      alamat: "Jl. Bunga Mawar",
      telepon: "081237492812"
    },
    {
      kode_anggota: "AG0456",
      nama_anggota: "Alex Permana",
      alamat: "Jl. Bunga Melati",
      telepon: "081237492812"
    },
    {
      kode_anggota: "AG0789",
      nama_anggota: "Budi Santoso",
      alamat: "Jl. Bunga Anggrek",
      telepon: "081237492812"
    },
    {
      kode_anggota: "AG0202",
      nama_anggota: "Ales Santoso",
      alamat: "Jl. Bunga Tulip",
      telepon: "081237492812"
    }
  ]
  const initialState = {
    data: []
  }

  const [state, dispatch] = useReducer(anggotaReducer, initialState)

  const deleteData = oldData => {
    let data = anggota.filter(row => row.kode_anggota !== oldData.kode_anggota)
    dispatch({
      type: DELETE_DATA,
      data: data
    })
  }

  const getAnggota = () => {
    let data = anggota
    dispatch({
      type: GET_ANGGOTA,
      data: data
    })
  }

  const addAnggota = newData => {
    let data = anggota
    data.push(newData)
    dispatch({
      type: ADD_ANGGOTA,
      data: data
    })
  }

  return (
    <anggotaContext.Provider
      value={{
        data: state.data,
        deleteData,
        getAnggota,
        addAnggota
      }}
    >
      {props.children}
    </anggotaContext.Provider>
  )
}

export default AnggotaState