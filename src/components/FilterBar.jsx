function FilterBar({ selectedCategory, setSelectedCategory }) {
  const categories = ["الكل", "صالون", "نوم", "سفرة", "مكتب"]

  return (
    <div className="flex justify-center gap-4 flex-wrap my-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`py-2 px-6 rounded-full font-medium transition duration-300 
            ${selectedCategory === category
              ? "bg-yellow-400 text-white"
              : "bg-white text-gray-600 hover:bg-yellow-100"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterBar