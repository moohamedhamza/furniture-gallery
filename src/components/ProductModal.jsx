import { motion } from 'framer-motion'

function ProductModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full mx-4"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <span className="text-sm text-yellow-500 font-medium">
            {item.category}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mt-1 mb-2">
            {item.name}
          </h2>
          <p className="text-gray-500 mb-4">
            قطعة أثاث فاخرة بتصميم عصري ومريح تناسب جميع الأذواق
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl text-yellow-600 font-bold">
              {item.price}
            </span>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="bg-gray-200 text-gray-600 py-2 px-6 rounded-full hover:bg-gray-300 transition"
              >
                إغلاق
              </button>
              <button className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition">
                اطلب دلوقتي
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductModal