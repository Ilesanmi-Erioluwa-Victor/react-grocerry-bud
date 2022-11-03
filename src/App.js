import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import { List } from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="App">
      <h3>Hello</h3>
    </div>
  );
}

export default App;
