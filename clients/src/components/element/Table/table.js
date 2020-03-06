import React, { useState, useContext } from "react"
import MaterialTable from "material-table"

const table = props => {
  const _AddHandler = (newData, resolve) => {
    props.add(newData)
    resolve()
  }
  const _EditHandler = (newData, oldData, resolve) => {
    if (oldData) {
      props.edit(newData, oldData)
    }
    resolve()
  }
  const _DeleteHandler = (oldData, resolve) => {
    props.delete(oldData)
    resolve()
  }
  return (
    <MaterialTable
      isLoading={props.loading}
      title={props.title}
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            _AddHandler(newData, resolve)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            _EditHandler(newData, oldData, resolve)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            _DeleteHandler(oldData, resolve)
          })
      }}
      options={{
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 30, 50, 75, 100],
        toolbar: true,
        paging: true,
        actionsColumnIndex: -1
      }}
    />
  )
}

export default table
