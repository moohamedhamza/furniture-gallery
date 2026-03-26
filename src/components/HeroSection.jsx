import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-16 px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-white mb-4"
      >
        أثاث بتصميم يليق بيك 🛋️
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-white mb-8"
      >
        اكتشف أجمل قطع الأثاث بأفضل الأسعار
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white text-yellow-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-100 transition"
      >
        تصفح المنتجات
      </motion.button>
    </div>
  )
}

export default HeroSection