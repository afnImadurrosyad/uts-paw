export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input //commit kosong untuk rename
      type='search'
      placeholder='Cari judul...'
      aria-label='Cari judul'
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  );
}
