import React, { useReducer } from "react"
import firebase from "../../config/Firebase"
import bukuContext from "../context/bukuContext"
import bukuReducer from "../reducer/bukuReducer"
import { GET_BUKU, SET_LOADING } from "../types"

const BukuState = props => {
  const ref = firebase.firestore().collection("buku")

  const initialState = {
    data: [],
    loading: false
  }

  const [state, dispatch] = useReducer(bukuReducer, initialState)

  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    })

  const deleteData = async oldData => {
    setLoading()
    await ref
      .doc(oldData.id)
      .delete()
      .then(() => getBuku())
      .catch(err => console.error(err))
  }

  const getBuku = async () => {
    setLoading()
    await ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        nm_buku: doc.data().nm_buku,
        pengarang: doc.data().pengarang,
        penerbit: doc.data().penerbit,
        tarif: doc.data().tarif,
        durasi: doc.data().durasi.toDate()
      }))
      dispatch({
        type: GET_BUKU,
        data: data
      })
    })
  }

  const addBuku = async newData => {
    setLoading()
    let nData = newData
    const newDate = new Date(nData.durasi)
    console.log(parseInt(nData.tarif))
    await ref
      .add({
        nm_buku: nData.nm_buku,
        pengarang: nData.pengarang,
        penerbit: nData.penerbit,
        tarif: nData.tarif,
        durasi: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getBuku())
      .catch(error => console.error("Error adding to database"))
  }

  const editBuku = async (newData, oldData) => {
    setLoading()

    let nData = newData
    const newDate = new Date(nData.durasi)
    await ref
      .doc(oldData.id)
      .set({
        nm_buku: newData.nm_buku,
        pengarang: newData.pengarang,
        penerbit: newData.penerbit,
        tarif: newData.tarif,
        durasi: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getBuku())
      .catch(err => console.error("Error"))
  }

  return (
    <bukuContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        deleteData,
        getBuku,
        addBuku,
        editBuku
      }}
    >
      {props.children}
    </bukuContext.Provider>
  )
}

export default BukuState
