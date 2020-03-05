import React, { useReducer } from "react";
import axios from "../../config/axios-config";
import anggotaContext from "../context/anggotaContext";
import anggotaReducer from "../reducer/anggotaReducer";
import {
  DELETE_ANGGOTA,
  GET_ANGGOTA,
  ADD_ANGGOTA,
  EDIT_ANGGOTA
} from "../types";

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
  ];
  const initialState = {
    data: []
  };

  const [state, dispatch] = useReducer(anggotaReducer, initialState);

  const deleteData = oldData => {
    let data = anggota.filter(row => row.kode_anggota !== oldData.kode_anggota);
    dispatch({
      type: DELETE_ANGGOTA,
      data: data
    });
  };

  const getAnggota = () => {
    axios.get("/anggota.json").then(res => {
      console.log(res.data);
      let data = res.data;
      dispatch({
        type: GET_ANGGOTA,
        data: data
      });
    });
  };

  const addAnggota = newData => {
    let nData = newData;
    axios.post("/anggota.json", nData).then(res => {
      let data = initialState.data;
      data.push(res.data);
      dispatch({
        type: ADD_ANGGOTA,
        data: data
      });
    });
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
