// Dummy data (gunakan untuk percobaan function)
let petugas = [
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
};

export const _GetPetugasById = id => {
  // Code untuk GET petugas berdasarkan id (kd petugas)
};

export const _AddPetugas = data => {
  // Code untuk POST / menambahkan petugas baru
  petugas.push({
    kd_petugas: data.kd_petugas,
    nm_petugas: data.nm_petugas,
    jabatan: data.jabatan,
    tlpn_petugas: data.tlpn_petugas
  });
  console.log(petugas);
  return {
    data: petugas
  };
};

export const _EditPetugas = ({ id, data }) => {
  // Code untuk PUT / edit data petugas berdasarkan id (kd petugas)
};

export const _DeletePetugas = id => {
  // Code untuk DELETE petugas berdasarkan id (kd petugas)
};
