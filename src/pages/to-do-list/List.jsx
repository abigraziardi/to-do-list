import { useState } from "react";
import Item from "../../components/to-do-list/Item";
import SelectBox from "../../components/to-do-list/SelectBox";
import ClearAll from "../../components/to-do-list/ClearAll";

export default function List({
  items,
  onCheckedItem,
  onDeleteItem,
  onDeleteAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (value) => {
    setSortBy(value);
  };

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

  const handleModalToggle = (value) => {
    setIsModalOpen(value);
  };

  const handleConfirmDelete = () => {
    onDeleteAll();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-7 mt-4 mb-2 sm:mr-3 sm:ml-1">
        <SelectBox sortBy={sortBy} onHandleSort={handleSort} />
        <ClearAll
          isModalOpen={isModalOpen}
          onHandleModalToggle={handleModalToggle}
          onHandleConfirmDelete={handleConfirmDelete}
        />
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
