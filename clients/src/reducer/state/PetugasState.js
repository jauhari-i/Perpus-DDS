import React, { useReducer } from "react"
import petugasContext from "../context/petugasContext"
import petugasReducer from "../reducer/petugasReducer"
import firebase from "../../config/Firebase"
import { GET_PETUGAS, SET_LOADING } from "../types"

const PetugasState = props => {
  const initialState = {
    petugas: [],
    loading: false
  }

  const petugasStore = firebase.firestore().collection("petugas")

  const [state, dispatch] = useReducer(petugasReducer, initialState)

  const getPetugas = async () => {
    setLoading()
    await petugasStore.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        kd_petugas: doc.data().kd_petugas,
        nm_petugas: doc.data().nm_petugas,
        jabatan: doc.data().jabatan,
        tlpn_petugas: doc.data().tlpn_petugas
      }))
      console.log(data)
      dispatch({
        type: GET_PETUGAS,
        data: data
      })
    })
  }

  const deletePetugas = async oldData => {
    await petugasStore
      .doc(oldData.id)
      .delete()
      .then(() => getPetugas())
      .catch(err => console.error(err))
  }

  const editPetugas = async (newData, oldData) => {
    setLoading()
    await petugasStore
      .doc(oldData.id)
      .set({
        kd_petugas: newData.kd_petugas,
        nm_petugas: newData.nm_petugas,
        jabatan: newData.jabatan,
        tlpn_petugas: newData.tlpn_petugas
      })
      .then(() => getPetugas())
      .catch(err => console.error(err))
  }

  const addPetugas = async newData => {
    setLoading()
    await petugasStore
      .add({
        kd_petugas: `P${state.petugas.length + 1}`,
        nm_petugas: newData.nm_petugas,
        jabatan: newData.jabatan,
        tlpn_petugas: newData.tlpn_petugas
      })
      .then(() => getPetugas())
      .catch(err => console.error(err))
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <petugasContext.Provider
      value={{
        petugas: state.petugas,
        loading: state.loading,
        getPetugas,
        deletePetugas,
        editPetugas,
        addPetugas
      }}
    >
      {props.children}
    </petugasContext.Provider>
  )
}

export default PetugasState
