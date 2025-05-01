import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue, updateInputValue }) {
  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor="searchByName">Find contacts by name</label>
      <input
        type="text"
        className={css.searchByName}
        id="searchByName"
        name="searchByName"
        value={inputValue}
        onChange={(event) => updateInputValue(event.target.value)}
      />
    </div>
  );
}
