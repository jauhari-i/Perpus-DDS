import React, { useReducer } from "react";
import firebase from "../../config/Firebase";
import anggotaContext from "../context/anggotaContext";
import anggotaReducer from "../reducer/anggotaReducer";
import {
  DELETE_ANGGOTA,
  GET_ANGGOTA,
  ADD_ANGGOTA,
  EDIT_ANGGOTA
} from "../types";

const AnggotaState = props => {
  const ref = firebase.firestore().collection("anggota");
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
  ];
  const initialState = {
    data: []
  };

  const [state, dispatch] = useReducer(anggotaReducer, initialState);

  const deleteData = oldData => {
    console.log(oldData);
    ref
      .doc(oldData.kode_anggota)
      .delete()
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  const getAnggota = () => {
    ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
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
    let data = anggota;
    data[data.indexOf(oldData)] = newData;
    console.log(data.indexOf(newData));
    dispatch({
      type: EDIT_ANGGOTA,
      data: data
    });
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
