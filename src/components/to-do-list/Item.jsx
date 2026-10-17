export default function Item({ item, onCheckedItem, onDeleteItem }) {
  return (
    <li className="bg-slate-50 border border-slate-300 text-slate-700 shadow-md rounded-xl p-3 py-3.5 flex items-center justify-between gap-3 relative hover:bg-slate-100 sm:p-4 sm:py-4.5">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onCheckedItem(item.id)}
        className={`peer appearance-none w-5 h-5 border-2 border-slate-400 rounded-full bg-white checked:bg-slate-600 checked:border-slate-600 transition-all cursor-pointer ${!item.checked ? "hover:bg-slate-200" : "hover:bg-slate-700"} `}
      />
      <svg
        className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block stroke-3"
        viewBox="0 0 17 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M6 14l5 6L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <span
        className={`text-lg flex-1 wrap-break-word break-all ${item.checked === true ? "line-through decoration-gray-700  text-gray-600" : ""}`}
      >
        {item.name}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="ml-2 mr-1 text-2xl cursor-pointer hover:text-red-500 transition-all sm:text-3xl"
      >
        &times;
      </button>
    </li>
  );
}
