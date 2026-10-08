import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onCheckedItem,
  onDeleteItem,
  onDeleteAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [isModalOpen, setIsModalOpen] = useState(false);

  let sortedItems;
  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items.slice().reverse();
      break;
  }

  const handleConfirmDelete = () => {
    onDeleteAll();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-7 mt-4 mb-2 sm:mr-3 sm:ml-1">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 cursor-pointer shadow-md hover:bg-slate-100 text-slate-700 font-medium sm:text-lg"
        >
          <option value="input">Input</option>
          <option value="name">Nama</option>
          <option value="checked">Checked</option>
        </select>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-medium text-lg text-red-500 cursor-pointer hover:text-red-600 sm:text-xl"
          >
            Clear All
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-700/85 animate-fade-in">
              <div className="bg-slate-50 rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl transform transition-all scale-100 sm:max-w-md sm:max-h-70 sm:h-full sm:flex sm:flex-col sm:justify-center">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 mb-4 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                    ❗
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 sm:text-xl">
                    Konfirmasi Hapus
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 sm:text-lg">
                    Apakah anda ingin menghapus semua data?
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors cursor-pointer sm:text-lg"
                  >
                    Tidak
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="flex-1 px-4 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors cursor-pointer sm:text-lg"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 px-3 mx-2 py-7 overflow-y-auto scrollbar-thumb-slate-600 sm:px-4 sm:mx-3">
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onCheckedItem={onCheckedItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
