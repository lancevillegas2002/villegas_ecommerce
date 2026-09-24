import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

const FIRST_BATCH = 6;

function Home({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(FIRST_BATCH);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function changeSearch(value) {
    setSearch(value);
    setVisibleCount(FIRST_BATCH);
  }

  function changeCategory(value) {
    setCategory(value);
    setVisibleCount(FIRST_BATCH);
  }

  return (
    <div className="market-layout">
      <Sidebar
        search={search}
        setSearch={changeSearch}
        category={category}
        setCategory={changeCategory}
        categories={categories}
      />

      <main className="market-content">
        <div className="market-heading">
          <h2>Today's picks</h2>
          <p>Browse items available in our sample marketplace.</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="empty-box">
            No products found.
          </div>
        ) : (
          <>
            <div className="listing-grid">
              {filteredProducts
                .slice(0, visibleCount)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
            </div>

            {visibleCount < filteredProducts.length && (
              <div className="view-more-area">
                <button
                  onClick={() =>
                    setVisibleCount(visibleCount + 6)
                  }
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Home;