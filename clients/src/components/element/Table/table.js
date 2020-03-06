import React, { useState, useContext } from "react"
import MaterialTable from "material-table"
import PeopleAlt from "@material-ui/icons/PeopleAlt"
import Button from "@material-ui/core/Button"
import EditIcon from "@material-ui/icons/Edit"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import DeleteIcon from "@material-ui/icons/Delete"
import { green } from "@material-ui/core/colors"

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
        actionsColumnIndex: -1
      }}
      icons={{
        Add: props => <AddCircleIcon color="primary" />,
        Edit: props => <EditIcon style={{ color: green[500] }} />,
        Delete: props => <DeleteIcon color="secondary" />
      }}
    />
  )
}

export default table
