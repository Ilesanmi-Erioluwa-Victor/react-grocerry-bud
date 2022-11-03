import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import { List } from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
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
    } else {
      const newItem = { id: new Date().getTime().toString(), itemName: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={HandleSubmit}>
        {alert.show && <Alert {...alert} />}
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
          <List item={list} />

          <button type="button" className="clear-btn">
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
