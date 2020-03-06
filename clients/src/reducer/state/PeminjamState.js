import React, { useReducer } from "react"
import peminjamContext from "../context/peminjamContext"
import peminjamReducer from "../reducer/peminjamReducer"
import firebase from "../../config/Firebase"
import { GET_PEMINJAM, SET_LOADING, GET_NAMA_ANGGOTA } from "../types"

const PeminjamState = props => {
  const ref = firebase.firestore().collection("peminjam")
  const ref2 = firebase.firestore().collection("anggota")
  const ref3 = firebase.firestore().collection("petugas")
  const initialState = {
    peminjam: [],
    nama: {},
    loading: false
  }

  const [state, dispatch] = useReducer(peminjamReducer, initialState)

  const getPinjam = async () => {
    setLoading()
    await ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(dat => ({
        id: dat.id,
        no_pinjam: dat.data().no_pinjam,
        nama_anggota: dat.data().nama_anggota,
        nama_petugas: dat.data().nama_petugas,
        tgl_pinjam: dat.data().tgl_pinjam.toDate()
      }))
      dispatch({
        type: GET_PEMINJAM,
        data: data
      })
    })
  }

  const getNamaAnggota = async () => {
    await ref2.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        nama_anggota: doc.data().nama_anggota
      }))
      let namas = {}
      for (var i = 0; i < data.length; i++) {
        namas[data[i].id] = data[i].nama_anggota
      }
      dispatch({
        type: GET_NAMA_ANGGOTA,
        data: namas
      })
    })
  }

  const editPeminjam = async (newData, oldData) => {
    setLoading()
    const date = newData.tgl_pinjam
    const newDate = new Date(date)
    await ref
      .doc(oldData.id)
      .set({
        no_pinjam: newData.no_pinjam,
        nama_anggota: newData.nama_anggota,
        nama_petugas: newData.nama_petugas,
        tgl_pinjam: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getPinjam())
      .catch(err => console.error(err))
  }

  const addPeminjam = async newData => {
    setLoading()
    const date = newData.tgl_pinjam
    const newDate = new Date(date)
    await ref
      .add({
        no_pinjam: state.peminjam.length + 1,
        nama_anggota: newData.nama_anggota,
        nama_petugas: newData.nama_petugas,
        tgl_pinjam: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getPinjam())
      .catch(err => console.error(err))
  }

  const deletePeminjam = async oldData => {
    await ref
      .doc(oldData.id)
      .delete()
      .then(() => getPinjam())
      .catch(err => console.error(err))
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <peminjamContext.Provider
      value={{
        peminjam: state.peminjam,
        loading: state.loading,
        nama_anggota: state.nama,
        getPinjam,
        getNamaAnggota,
        editPeminjam,
        addPeminjam,
        deletePeminjam
      }}
    >
      {props.children}
    </peminjamContext.Provider>
  )
}

export default PeminjamState
