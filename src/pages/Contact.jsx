import { motion } from 'framer-motion'

function Contact({ darkMode }) {
  return (
    <div className="max-w-2xl mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl shadow-md p-8`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">تواصل معنا 📧</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="اسمك"
            className="border-2 border-yellow-400 rounded-full py-3 px-6 focus:outline-none focus:border-yellow-500"
          />
          <input
            type="email"
            placeholder="ايميلك"
            className="border-2 border-yellow-400 rounded-full py-3 px-6 focus:outline-none focus:border-yellow-500"
          />
          <textarea
            placeholder="رسالتك"
            rows="5"
            className="border-2 border-yellow-400 rounded-2xl py-3 px-6 focus:outline-none focus:border-yellow-500"
          />
          <button className="bg-yellow-400 text-white py-3 px-8 rounded-full font-bold hover:bg-yellow-500 transition">
            ابعت الرسالة 🚀
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact