import React, { useContext, useEffect } from "react"
import Table from "../../components/element/Table"
import bukuContext from "../../reducer/context/bukuContext"
import { tableColumn } from "../../constants/Table"
import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  number: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0
    }
  },
  input: {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none"
    },
    fontSize: 13,
    marginTop: 5
  }
}))

const bukus = props => {
  const Buku = useContext(bukuContext)
  const { getBuku, data, deleteData, addBuku, editBuku, loading } = Buku
  useEffect(() => {
    getBuku()
  }, [])
  const classes = useStyle()
  const columns = [
    {
      title: "Nama Buku",
      field: "nm_buku"
    },
    {
      title: "Pengarang",
      field: "pengarang"
    },
    {
      title: "Penerbit",
      field: "penerbit"
    },
    {
      title: "Tarif",
      field: "tarif",
      type: "currency",
      currencySetting: {
        locale: "IDN",
        currencyCode: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 3
      },
      editComponent: props => (
        <TextField
          type="number"
          placeholder="Tarif"
          size="small"
          fullWidth
          InputProps={{
            inputProps: { min: 0, max: 9999999999999, className: classes.input }
          }}
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    {
      title: "Durasi",
      field: "durasi",
      type: "date"
    }
  ]
  if (data) {
    return (
      <div>
        <Table
          title="Buku"
          loading={loading}
          columns={columns}
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
