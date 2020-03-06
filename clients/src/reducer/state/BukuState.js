import React, { useReducer } from "react";
import firebase from "../../config/Firebase";
import bukuContext from "../context/bukuContext";
import bukuReducer from "../reducer/bukuReducer";
import { GET_BUKU } from "../types";

const AnggotaState = props => {
  const ref = firebase.firestore().collection("buku");

  const initialState = {
    data: []
  };

  const [state, dispatch] = useReducer(bukuReducer, initialState);

  const deleteData = oldData => {
    console.log(oldData);
    ref
      .doc(oldData.id)
      .delete()
      .then(() => getBuku())
      .catch(err => console.error(err));
  };

  const getBuku = () => {
    ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        nm_buku: doc.data().nm_buku,
        pengarang: doc.data().pengarang,
        penerbit: doc.data().penerbit,
        tarif: doc.data().tarif.toString(),
        durasi: doc.data().durasi.toLocaleDateString()
      }));
      dispatch({
        type: GET_BUKU,
        data: data
      });
    });
  };

  const addBuku = newData => {
    let nData = newData;
    let tarifInt = parseInt(newData.tarif);
    ref
      .add({
        nm_buku: nData.nm_buku,
        pengarang: nData.pengarang,
        penerbit: nData.penerbit,
        tarif: tarifInt,
        durasi: nData.durasi
      })
      .then(() => getBuku())
      .catch(error => console.error("Error adding to database"));
  };

  const editBuku = (newData, oldData) => {
    ref
      .doc(oldData.id)
      .set({
        nm_buku: newData.nm_buku,
        pengarang: newData.pengarang,
        penerbit: newData.penerbit,
        tarif: newData.tarif,
        durasi: newData.durasi.toLocaleDateString()
      })
      .then(() => getBuku())
      .catch(err => console.error("Error"));
  };

  return (
    <bukuContext.Provider
      value={{
        data: state.data,
        deleteData,
        getBuku,
        addBuku,
        editBuku
      }}
    >
      {props.children}
    </bukuContext.Provider>
  );
};

export default AnggotaState;
