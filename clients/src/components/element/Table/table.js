import React, { useState, useContext } from "react"
import MaterialTable from "material-table"

const table = props => {
  const _AddHandler = (newData, resolve) => {
    setTimeout(() => {
      props.add(newData)
      resolve()
    }, 600)
  }
  const _EditHandler = (newData, oldData, resolve) => {
    setTimeout(() => {
      if (oldData) {
        props.edit(newData, oldData)
      }
      resolve()
    }, 600)
  }
  const _DeleteHandler = (oldData, resolve) => {
    setTimeout(() => {
      props.delete(oldData)
      resolve()
    }, 600)
  }
  return (
    <MaterialTable
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
        actionsColumnIndex: -1
      }}
    />
  )
}

export default table
