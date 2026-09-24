function Sidebar({ search, setSearch, category, setCategory, categories }) {
  return (
    <aside className="sidebar">
      <h1>Marketplace</h1>
      <input className="market-search" placeholder="Search Marketplace" value={search} onChange={(e) => setSearch(e.target.value)} />
      <h3>Categories</h3>
      {categories.map((item) => (
        <button key={item} className={category === item ? "category active" : "category"} onClick={() => setCategory(item)}>
          <span className="category-icon">●</span>{item}
        </button>
      ))}
    </aside>
  );
}
export default Sidebar;
