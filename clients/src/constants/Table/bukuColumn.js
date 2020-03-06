const bukuColumn = [
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
    }
  },
  {
    title: "Durasi",
    field: "durasi",
    type: "date"
  }
]

export default bukuColumn
