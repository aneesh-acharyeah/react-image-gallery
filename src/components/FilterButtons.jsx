 import '../styles/Gallery.css';

const FilterButtons = ({ categories, filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {categories.map(cat => (
        <button
          key={cat}
          className={filter === cat ? 'active' : ''}
          onClick={() => setFilter(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;