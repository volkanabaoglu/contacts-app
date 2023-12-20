import React from "react";
import { useState } from "react";

const List = ({ contacts }) => {
  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            {contact.fullname} {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
