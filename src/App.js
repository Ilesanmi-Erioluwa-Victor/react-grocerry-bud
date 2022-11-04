import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import { List } from "./List";

const getListFromLocalStorage = () => {
  let getList = localStorage.getItem("list");
  if (getList) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  // When dealing with local storage, always return as default value in your hook
  const [list, setList] = useState(getListFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  // Function for setAlert
  const showAlert = (show = false, msg = "", type = "") => {
    return setAlert({ show, msg, type });
  };

  const HandleSubmit = (ev) => {
    ev.preventDefault();

    if (!name) {
      // display  danger alert using showAlert function below..
      showAlert(true, "Please enter valid nme", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          // check if this id match editId, if yes, Change the name..
          if (item.id === editId) {
            return { ...item, itemName: name };
          }

          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Item, successfully edited", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), itemName: name };
      setList([...list, newItem]);
      showAlert(true, "Item, successfully added to list", "success");
      setName("");
    }
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "Emptied List", "danger");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const SpecificId = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(SpecificId.itemName);
  };

  // For local Storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={HandleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>

        <div className="form-control">
          <input
            type={"text"}
            className="grocery"
            placeholder="enter your grocery item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List item={list} removeItem={removeItem} editItem={editItem} />

          <button type="button" className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
