import React, { useEffect, useContext } from "react"
import petugasContext from "../../reducer/context/petugasContext"
import { tableColumn } from "../../constants/Table"
import Table from "../../components/element/Table"
const components = props => {
  const Petugas = useContext(petugasContext)
  const {
    petugas,
    getPetugas,
    deletePetugas,
    loading,
    editPetugas,
    addPetugas
  } = Petugas
  useEffect(() => {
    getPetugas()
  }, [])
  return (
    <div>
      <Table
        title="Petugas"
        data={petugas}
        columns={tableColumn.PetugasColumn}
        loading={loading}
        delete={deletePetugas}
        add={addPetugas}
        edit={editPetugas}
      />
    </div>
  )
}

export default components
