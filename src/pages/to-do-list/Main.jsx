import { useState } from "react";
import Info from "./Info";
import List from "./List";
import Form from "../../components/to-do-list/Form";

export default function Main() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div className="h-190 px-5 flex flex-col sm:w-160 sm:m-auto">
      <div className="bg-linear-to-b from-teal-700 via-cyan-100 to-orange-200 flex flex-col flex-1 border-6 border-slate-900 rounded-lg overflow-hidden font-roboto">
        <Form onAddItem={handleAddItem} />
        <List
          items={items}
          onCheckedItem={handleChecked}
          onDeleteItem={handleDeleteItem}
          onDeleteAll={handleDeleteAll}
        />
        <Info items={items} />
      </div>
    </div>
  );
}
