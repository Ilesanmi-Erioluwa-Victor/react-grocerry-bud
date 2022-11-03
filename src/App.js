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
  return (
    <div className="App">
      <h3>Hello</h3>
    </div>
  );
}

export default App;
