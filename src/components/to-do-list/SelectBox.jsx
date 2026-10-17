export default function SelectBox({ sortBy, onHandleSort }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onHandleSort(e.target.value)}
      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 cursor-pointer shadow-md hover:bg-slate-100 text-slate-700 font-medium sm:text-lg"
    >
      <option value="input">Input</option>
      <option value="name">Nama</option>
      <option value="checked">Checked</option>
    </select>
  );
}
