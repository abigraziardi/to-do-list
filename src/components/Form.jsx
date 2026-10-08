import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");

  const handleItem = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const id = crypto.randomUUID();
    const newItem = { id, name, checked: false };
    onAddItem(newItem);
    setName("");
  };

  return (
    <form onSubmit={handleItem} className="p-2 flex gap-2 justify-center">
      <input
        type="text"
        placeholder="Tambahkan to-do list..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b-2 px-3 w-sm text-lg text-slate-800 focus:outline-none focus:border-slate-700 transition-colors placeholder:text-slate-800 placeholder:text-lg focus:placeholder:text-slate-700 sm:text-xl sm:placeholder:text-xl sm:w-lg"
      />
    </form>
  );
}
