import { useState } from "react";

const Hobbies = () => {
  const initialHobbies = ["playing", "singing", "kapring"].map((hobby, index) => ({
    id: index,
    name: hobby
  }));
  const [hobbies, setHobbies] = useState(initialHobbies);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheck = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const deleteHandler = (id) => {
    const updatedHobbies = hobbies.filter((hobby) => hobby.id !== id);
    setHobbies(updatedHobbies);
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  return (
    <>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(hobby.id)}
              onChange={(e) => handleCheck(e, hobby.id)}
            />
            {hobby.name}
            {selectedItems.includes(hobby.id) && (
              <button onClick={() => deleteHandler(hobby.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hobbies;
