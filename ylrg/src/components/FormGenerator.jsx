import { useState } from "react";

export default function FormGenerator() {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setResult(name);
  }

  function handleChange(e) {
    setName(e.target.name);
    setResult("");
  }

  const handleEditClick = () => {
    setDisabled(false);
  }

  const handleSaveClick = () => {
    setDisabled(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Anime name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          onInput={handleChange}
          required
        />
        {disabled && (
            <button type="submit" onClick={handleEditClick}>EDIT</button>
        )}
        {!disabled && (
            <button type="submit" onClick={handleSaveClick}>SAVE</button>
        )}
        <h4>{name}</h4>
      </label>
    </form>
  )
}