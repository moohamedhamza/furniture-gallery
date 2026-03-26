import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-gray-800 text-white py-12 px-8 mt-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* اللوجو */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🛋️ أثاث لوكس
          </h2>
          <p className="text-gray-400">
            أجمل قطع الأثاث بأفضل الأسعار
          </p>
        </div>

        {/* روابط */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">
            روابط سريعة
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer transition">الرئيسية</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">المنتجات</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">تواصل معنا</li>
          </ul>
        </div>

        {/* تواصل */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">
            تواصل معنا
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>📧 info@athath-lux.com</li>
            <li>📞 01234567890</li>
            <li>📍 القاهرة، مصر</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-8">
        <p>© 2024 أثاث لوكس. جميع الحقوق محفوظة</p>
      </div>
    </motion.footer>
  )
}

export default Footer