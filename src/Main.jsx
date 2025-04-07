import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cricket",
    },
    {
      id: 1,
      checked: true,
      item: "PS4",
    },
    {
      id: 1,
      checked: false,
      item: "Learning React",
    },
  ]);
  return (
    <div className="main">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              className="checkBox"
              type="checkbox"
              checked={item.checked}
            />
            <label htmlFor="checkBox" className="itemName">
              {item.item}
            </label>
            <FaTrashAlt role="button" className="deleteButton" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
