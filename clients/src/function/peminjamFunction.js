// Dummy data (gunakan untuk percobaan function)
let peminjam = [
  {
    no_pinjam: "1",
    nama_anggota: "andi",
    nama_petugas: "diva",
    tgl_pinjam: "20/01/2020"
  },
  {
    no_pinjam: "2",
    nama_anggota: "andi",
    nama_petugas: "galuh",
    tgl_pinjam: "11/01/2020"
  },
  {
    no_pinjam: "3",
    nama_anggota: "budi",
    nama_petugas: "jihan",
    tgl_pinjam: "15/01/2020"
  }
];

// Function mulai sini!
export const _GetPeminjamAll = () => {
  // Code untuk GET all peminjam
};

export const _GetPeminjamById = id => {
  // Code untuk GET peminjam berdasarkan id (no pinjam)
};

export const _AddPeminjam = data => {
  // Code untuk POST / menambahkan peminjam baru
  peminjam.push({
    no_pinjam: data.no_pinjam,
    nama_anggota: data.nama_anggota,
    nama_petugas: data.nama_petugas,
    tgl_pinjam: data.tgl_pinjam
  });
  return {
    data: peminjam
  };
};

export const _EditPeminjam = ({ id, data }) => {
  // Code untuk PUT / edit data peminjam berdasarkan id (no peminjam)
};

export const _DeletePeminjam = id => {
  // Code untuk DELETE peminjam berdasarkan id (no peminjam)
};
