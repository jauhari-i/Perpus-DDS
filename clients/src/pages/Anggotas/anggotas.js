import React, { useState, useContext, useEffect } from "react"
import Table from "../../components/element/Table"
import anggotaContext from "../../reducer/context/anggotaContext"
import { tableColumn } from "../../constants/Table"

const anggotas = props => {
  const Anggota = useContext(anggotaContext)
  const {
    getAnggota,
    data,
    deleteData,
    addAnggota,
    editAnggota,
    loading
  } = Anggota
  useEffect(() => {
    getAnggota()
  }, [])
  if (data) {
    return (
      <div>
        <Table
          title="Anggota"
          columns={tableColumn.AnggotaColumn}
          data={data}
          delete={deleteData}
          add={addAnggota}
          edit={editAnggota}
          loading={loading}
        />
      </div>
    )
  }
  return <div className=""></div>
}

export default anggotas
