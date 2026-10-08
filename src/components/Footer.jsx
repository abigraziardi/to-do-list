export default function Footer({ items }) {
  const totalItem = items.length;
  const checkedItem = items.filter((item) => item.checked === true).length;
  const percentage = Math.round((checkedItem / totalItem) * 100);

  return (
    <footer className="bg-slate-50 mt-3 p-4 flex flex-col gap-2 text-lg text-slate-700 font-medium rounded-t-2xl sm:p-5 sm:text-xl">
      {!totalItem ? (
        <p className="text-center">Belum ada list</p>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-3">
            <span>
              Total List:{" "}
              <strong className="text-slate-800">{totalItem}</strong>
            </span>
            <span>
              Selesai:{" "}
              <strong className="text-slate-800">
                {checkedItem} ({percentage}%)
              </strong>
            </span>
          </div>

          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden sm:h-3">
            <div
              className="bg-slate-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}
    </footer>
  );
}
