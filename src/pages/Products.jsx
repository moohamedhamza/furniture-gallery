import FurnitureCard from '../components/FurnitureCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'

function Products({ darkMode, filteredData, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, favorites, toggleFavorite, setSelectedItem }) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <h2 className={`text-3xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        كل المنتجات 🛋️
      </h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <FurnitureCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
            darkMode={darkMode}
            onDetails={() => setSelectedItem(item)}
            isFavorite={favorites.some(f => f.id === item.id)}
            onFavorite={() => toggleFavorite(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default Products