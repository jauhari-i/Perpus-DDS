-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Mar 2020 pada 00.59
-- Versi server: 10.1.36-MariaDB
-- Versi PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_perpus`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota`
--

CREATE TABLE `anggota` (
  `kd_anggota` char(10) NOT NULL,
  `nm_anggota` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `tlpn` varchar(30) NOT NULL,
  `email_anggota` varchar(50) NOT NULL,
  `ps_anggota` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `anggota`
--

INSERT INTO `anggota` (`kd_anggota`, `nm_anggota`, `alamat`, `tlpn`, `email_anggota`, `ps_anggota`) VALUES
('AG0001', 'Aufa', 'Kras', '085546123055', 'mocha@gmail.com', 'upnormal');

--
-- Trigger `anggota`
--
DELIMITER $$
CREATE TRIGGER `tg_anggota_insert` BEFORE INSERT ON `anggota` FOR EACH ROW BEGIN
  INSERT INTO anggota_id VALUES (NULL);
  SET NEW.kd_anggota = CONCAT('AG', LPAD(LAST_INSERT_ID(), 4, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota_id`
--

CREATE TABLE `anggota_id` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `anggota_id`
--

INSERT INTO `anggota_id` (`id`) VALUES
(1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku`
--

CREATE TABLE `buku` (
  `kd_buku` char(10) NOT NULL,
  `nm_buku` varchar(30) NOT NULL,
  `pengarang` varchar(30) NOT NULL,
  `penerbit` varchar(30) NOT NULL,
  `tarif` int(11) NOT NULL,
  `durasi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Trigger `buku`
--
DELIMITER $$
CREATE TRIGGER `tg_buku_insert` BEFORE INSERT ON `buku` FOR EACH ROW BEGIN
  INSERT INTO buku_id VALUES (NULL);
  SET NEW.kd_buku = CONCAT('BK', LPAD(LAST_INSERT_ID(), 5, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku_id`
--

CREATE TABLE `buku_id` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dipinjam`
--

CREATE TABLE `dipinjam` (
  `no_pinjam` int(10) NOT NULL,
  `kd_buku` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjam`
--

CREATE TABLE `peminjam` (
  `no_pinjam` int(10) NOT NULL,
  `kd_anggota` char(10) NOT NULL,
  `kd_petugas` char(10) NOT NULL,
  `tgl_pinjam` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `petugas`
--

CREATE TABLE `petugas` (
  `kd_petugas` char(10) NOT NULL,
  `nm_petugas` varchar(30) NOT NULL,
  `jabatan` varchar(30) NOT NULL,
  `tlpn_petugas` varchar(30) NOT NULL,
  `email_petugas` varchar(50) NOT NULL,
  `ps_petugas` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `petugas`
--

INSERT INTO `petugas` (`kd_petugas`, `nm_petugas`, `jabatan`, `tlpn_petugas`, `email_petugas`, `ps_petugas`) VALUES
('P01', 'Aufa', 'Bos', '08555789765', 'mocha@gmail.com', 'upnormal');

--
-- Trigger `petugas`
--
DELIMITER $$
CREATE TRIGGER `tg_petugas_insert` BEFORE INSERT ON `petugas` FOR EACH ROW BEGIN
  INSERT INTO petugas_id VALUES (NULL);
  SET NEW.kd_petugas = CONCAT('P', LPAD(LAST_INSERT_ID(), 2, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `petugas_id`
--

CREATE TABLE `petugas_id` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `petugas_id`
--

INSERT INTO `petugas_id` (`id`) VALUES
(1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`kd_anggota`);

--
-- Indeks untuk tabel `anggota_id`
--
ALTER TABLE `anggota_id`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`kd_buku`);

--
-- Indeks untuk tabel `buku_id`
--
ALTER TABLE `buku_id`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `dipinjam`
--
ALTER TABLE `dipinjam`
  ADD UNIQUE KEY `no_pinjam` (`no_pinjam`,`kd_buku`),
  ADD KEY `buku` (`kd_buku`);

--
-- Indeks untuk tabel `peminjam`
--
ALTER TABLE `peminjam`
  ADD PRIMARY KEY (`no_pinjam`),
  ADD UNIQUE KEY `kd_anggota` (`kd_anggota`,`kd_petugas`),
  ADD KEY `petugas` (`kd_petugas`);

--
-- Indeks untuk tabel `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`kd_petugas`);

--
-- Indeks untuk tabel `petugas_id`
--
ALTER TABLE `petugas_id`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `anggota_id`
--
ALTER TABLE `anggota_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `buku_id`
--
ALTER TABLE `buku_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `peminjam`
--
ALTER TABLE `peminjam`
  MODIFY `no_pinjam` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `petugas_id`
--
ALTER TABLE `petugas_id`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `dipinjam`
--
ALTER TABLE `dipinjam`
  ADD CONSTRAINT `buku` FOREIGN KEY (`kd_buku`) REFERENCES `buku` (`kd_buku`),
  ADD CONSTRAINT `pinjam` FOREIGN KEY (`no_pinjam`) REFERENCES `peminjam` (`no_pinjam`);

--
-- Ketidakleluasaan untuk tabel `peminjam`
--
ALTER TABLE `peminjam`
  ADD CONSTRAINT `anggota` FOREIGN KEY (`kd_anggota`) REFERENCES `anggota` (`kd_anggota`),
  ADD CONSTRAINT `petugas` FOREIGN KEY (`kd_petugas`) REFERENCES `petugas` (`kd_petugas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;