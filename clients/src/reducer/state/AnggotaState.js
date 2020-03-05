import React, { useReducer } from "react";
import axios from "../../config/axios-config";
import firebase from "../../config/Firebase";
import anggotaContext from "../context/anggotaContext";
import anggotaReducer from "../reducer/anggotaReducer";
import { GET_ANGGOTA } from "../types";

const AnggotaState = props => {
  const ref = firebase.firestore().collection("anggota");

  const initialState = {
    data: []
  };

  const [state, dispatch] = useReducer(anggotaReducer, initialState);

  const deleteData = oldData => {
    console.log(oldData);
    ref
      .doc(oldData.id)
      .delete()
      .then(() => getAnggota())
      .catch(err => console.error(err));
  };

  const getAnggota = () => {
    ref.get().then(querySnapshot => {
      console.log("QSS");
      console.log(querySnapshot);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        kode_anggota: doc.data().kode_anggota,
        nama_anggota: doc.data().nama_anggota,
        alamat: doc.data().alamat,
        telepon: doc.data().telepon
      }));
      dispatch({
        type: GET_ANGGOTA,
        data: data
      });
    });
  };

  const addAnggota = newData => {
    let nData = newData;
    ref
      .add({
        kode_anggota: nData.kode_anggota,
        nama_anggota: nData.nama_anggota,
        alamat: nData.alamat,
        telepon: nData.telepon
      })
      .then(() => getAnggota())
      .catch(error => console.error("Error adding to database"));
  };

  const editAnggota = (newData, oldData) => {
    ref
      .doc(oldData.id)
      .set({
        kode_anggota: newData.kode_anggota,
        nama_anggota: newData.nama_anggota,
        alamat: newData.alamat,
        telepon: newData.telepon
      })
      .then(() => getAnggota())
      .catch(err => console.error("Error"));
  };

  return (
    <anggotaContext.Provider
      value={{
        data: state.data,
        deleteData,
        getAnggota,
        addAnggota,
        editAnggota
      }}
    >
      {props.children}
    </anggotaContext.Provider>
  );
};

export default AnggotaState;
