import React, { useState, useContext, useEffect } from "react"
import {
  _GetAnggotaAll,
  _AddAnggota,
  _EditAnggota,
  _DeleteAnggota
} from "../../function/anggotaFunction"
import Table from "../../components/element/Table"
import anggotaContext from "../../reducer/context/anggotaContext"
import { tableColumn } from "../../constants/Table"

const anggotas = props => {
  const Anggota = useContext(anggotaContext)
  const { getAnggota, data, deleteData, addAnggota } = Anggota
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
        />
      </div>
    )
  }
  return <div className=""></div>
}

export default anggotas
