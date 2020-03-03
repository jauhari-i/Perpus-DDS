let anggota = [
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

export const _GetAnggotaAll = () => {
  return {
    data: anggota
  };
};

export const _GetAnggotaById = kode => {
  let data = anggota.find(({ kode_anggota }) => kode_anggota === kode);
  return {
    data: data
  };
};

export const _AddAnggota = data => {
  anggota.push({
    kode_anggota: data.kode_anggota,
    nama_anggota: data.nama_anggota,
    alamat: data.alamat,
    telepon: data.telepon
  });
  return {
    data: anggota
  };
};

export const _DeleteAnggota = i => {
  anggota.splice(i, 1);
  return {
    data: anggota
  };
};

export const _EditAnggota = ({ i, data }) => {
  anggota.splice(i, 1, {
    kode_anggota: data.kode_anggota,
    nama_anggota: data.nama_anggota,
    alamat: data.alamat,
    telepon: data.telepon
  });
  return {
    data: anggota
  };
};
