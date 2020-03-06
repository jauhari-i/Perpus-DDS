import React, { useContext, useEffect } from "react"
import Table from "../../components/element/Table"
import bukuContext from "../../reducer/context/bukuContext"
import { tableColumn } from "../../constants/Table"

const bukus = props => {
  const Buku = useContext(bukuContext)
  const { getBuku, data, deleteData, addBuku, editBuku, loading } = Buku
  useEffect(() => {
    getBuku()
  }, [])
  if (data) {
    return (
      <div>
        <Table
          title="Buku"
          loading={loading}
          columns={tableColumn.BukuColumn}
          data={data}
          delete={deleteData}
          add={addBuku}
          edit={editBuku}
        />
      </div>
    )
  }
  return <div></div>
}

export default bukus
