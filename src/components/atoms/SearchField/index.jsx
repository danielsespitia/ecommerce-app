import './index.styles.css';

export const SearchField = ({ placeholder, handleSearchField }) => {
  return (
    <input
      className="search-field"
      type="search"
      aria-label="search-field"
      placeholder={placeholder}
      onChange={handleSearchField}
    />
  );
};
