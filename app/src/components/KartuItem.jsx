import { Link } from 'react-router-dom';

//commit kosong untuk rename

export default function KartuItem({ item }) {
  const { id, judul, kategori, kabupaten } = item;
  return (
    <article className='kartu'>
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · Kabupaten/Kota {kabupaten}
      </p>
    </article>
  );
}
