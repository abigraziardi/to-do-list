import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
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
    <div className="bg-linear-to-b from-slate-400 to-slate-700">
      <div className="h-screen p-5 flex flex-col sm:w-160 sm:m-auto">
        <div className="bg-linear-to-b from-teal-700 via-cyan-100 to-orange-200 flex flex-col flex-1 border-3 border-slate-800 rounded-lg overflow-hidden font-roboto">
          <Header />
          <Form onAddItem={handleAddItem} />
          <List
            items={items}
            onCheckedItem={handleChecked}
            onDeleteItem={handleDeleteItem}
            onDeleteAll={handleDeleteAll}
          />
          <Footer items={items} />
        </div>
      </div>
    </div>
  );
}
