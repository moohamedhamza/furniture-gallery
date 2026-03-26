import { motion } from 'framer-motion'

function FurnitureCard({ name, category, price, image, onDetails, darkMode, isFavorite, onFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300`}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 text-2xl"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-4">
        <span className="text-sm text-yellow-500 font-medium">
          {category}
        </span>
        <h3 className="text-lg font-bold mt-1">
          {name}
        </h3>
        <div className="flex justify-between items-center mt-3">
          <span className="text-yellow-600 font-bold">
            {price}
          </span>
          <button
            onClick={onDetails}
            className="bg-yellow-400 text-white py-1 px-4 rounded-full text-sm hover:bg-yellow-500 transition"
          >
            التفاصيل
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default FurnitureCard