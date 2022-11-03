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

  const HandleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={HandleSubmit}></form>

      <div className="grocery-container">
        <List />

        <button type="button" className="clear-btn">
          Clear items
        </button>
      </div>
    </section>
  );
}

export default App;
