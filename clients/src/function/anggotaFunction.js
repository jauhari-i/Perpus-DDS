// Dummy data (gunakan untuk percobaan function)
export let anggota = [
  {
    kode_anggota: "AG0123",
    nama_anggota: "Budi Permana",
    alamat: "Jl. Bunga Mawar",
    telepon: "081237492812"
  },
  {
    kode_anggota: "AG0456",
    nama_anggota: "Alex Permana",
    alamat: "Jl. Bunga Melati",
    telepon: "081237492812"
  },
  {
    kode_anggota: "AG0789",
    nama_anggota: "Budi Santoso",
    alamat: "Jl. Bunga Anggrek",
    telepon: "081237492812"
  },
  {
    kode_anggota: "AG0202",
    nama_anggota: "Ales Santoso",
    alamat: "Jl. Bunga Tulip",
    telepon: "081237492812"
  }
];

// Function mulai sini!
export const _GetAnggotaAll = () => {
  return {
    data: anggota
  };
};

export const _GetAnggotaById = id => {
  let data = anggota.find(({ kode_anggota }) => kode_anggota === id);
  return {
    data: data
  };
};

export const _AddAnggota = newData => {
  anggota.push(newData);
  return { data: anggota };
};

export const _EditAnggota = (newData, oldData) => {
  anggota[anggota.indexOf(oldData)] = newData;
  return { data: anggota };
};

export const _DeleteAnggota = newData => {
  anggota.splice(anggota.indexOf(newData), 1);
  return { data: anggota };
};
