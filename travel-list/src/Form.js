import { useState } from "react";
export function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !description.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      },
    ]);
    setDescription("");
    setQuantitiy(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantitiy(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Enter Item....."
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
