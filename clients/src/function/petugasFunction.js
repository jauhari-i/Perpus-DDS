// Dummy data (gunakan untuk percobaan function)
export let petugas = [
  {
    kd_petugas: "P01",
    nm_petugas: "Sabina",
    jabatan: "Kepala Perpustakaan",
    tlpn_petugas: "0819181819"
  },
  {
    kd_petugas: "P02",
    nm_petugas: "Setyo",
    jabatan: "Wakil Kepala Perpustakaan",
    tlpn_petugas: "0819181819"
  },
  {
    kd_petugas: "P03",
    nm_petugas: "Sulastri",
    jabatan: "Staf Perpustakaan",
    tlpn_petugas: "08771818"
  }
];

// Function mulai sini!
export const _GetPetugasAll = () => {
  // Code untuk GET all petugas
  return {
    data: petugas
  }
};

export const _GetPetugasById = id => {
  // Code untuk GET petugas berdasarkan id (kd petugas)
  let data = petugas.find(({ kd_petugas}) => kd_petugas === id);
  return{
    data: data
  };
};

export const _AddPetugas = data => {
  // Code untuk POST / menambahkan petugas baru
  petugas.push({
    kd_petugas: data.kd_petugas,
    nm_petugas: data.nm_petugas,
    jabatan: data.jabatan,
    tlpn_petugas: data.tlpn_petugas
  });
  return {
    data: petugas
  };
};

export const _EditPetugas = ({ id, data }) => {
  petugas.splice(id, 1, {
    kd_petugas: data.kd_petugas,
    nm_petugas: data.nm_petugas,
    jabatan: data.jabatan,
    tlpn_petugas: data.tlpn_petugas
  });
  return {
    data: petugas
  };
};

export const _DeletePetugas = id => {
  petugas.splice(id, 1);
  return {
    data: petugas
  };
};
