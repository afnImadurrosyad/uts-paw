import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useKoleksi from '../hooks/useKoleksi.js';
import './Tambah.css';

const AWAL = {
  judul: '',
  kategori: 'Taman Nasional',
  kabupaten: 'Bandar Lampung',
  hargaTiket: '',
  jamBuka: '',
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate();
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState('');

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.');
      return;
    }
    tambah({ ...form, judul: form.judul.trim() });
    navigate('/koleksi');
  };

  return (
    <form className='formulir' onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor='judul'>Judul</label>
      <input id='judul' name='judul' value={form.judul} onChange={ubah} />
      {galat && <p role='alert'>{galat}</p>}

      <label htmlFor='kategori'>Kategori</label>
      <select
        id='kategori'
        name='kategori'
        value={form.kategori}
        onChange={ubah}>
        <option>Taman Nasional</option>
        <option>Gunung</option>
        <option>Wisata Bahari</option>
        <option>Pantai</option>
        <option>Danau</option>
      </select>

      <label htmlFor='kabupaten'>Kabupaten/Kota</label>
      <select
        id='kabupaten'
        name='kabupaten'
        value={form.kabupaten}
        onChange={ubah}>
        <option>Bandar Lampung</option>
        <option>Pringsewu</option>
        <option>Natar</option>
        <option>Tanggamus</option>
        <option>Pesawaran</option>
        <option>Lampung Barat</option>
      </select>

      <label htmlFor='hargaTiket'>Harga Tiket</label>
      <input
        id='hargaTiket'
        name='hargaTiket'
        value={form.hargaTiket}
        onChange={ubah}
      />

      <label htmlFor='jamBuka'>Jam Buka</label>
      <input id='jamBuka' name='jamBuka' value={form.jamBuka} onChange={ubah} />

      <button type='submit'>Simpan</button>
    </form>
  );
}
