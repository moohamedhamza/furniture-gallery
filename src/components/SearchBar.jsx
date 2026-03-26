import { motion } from 'framer-motion'

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-6"
    >
      <input
        type="text"
        placeholder="🔍 ابحث عن منتج..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-md py-3 px-6 rounded-full border-2 border-yellow-400 focus:outline-none focus:border-yellow-500 text-gray-700 shadow-md"
      />
    </motion.div>
  )
}

export default SearchBar