export default function ClearAll({
  isModalOpen,
  onHandleModalToggle,
  onHandleConfirmDelete,
}) {
  return (
    <div>
      <button
        onClick={() => onHandleModalToggle(true)}
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
                onClick={() => onHandleModalToggle(false)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors cursor-pointer sm:text-lg"
              >
                Tidak
              </button>
              <button
                onClick={onHandleConfirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors cursor-pointer sm:text-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
