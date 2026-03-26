import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ darkMode, setDarkMode, favoritesCount, showFavorites, setShowFavorites }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md py-4 px-8 transition duration-300`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🛋️</span>
          <h1 className="text-xl font-bold">أثاث لوكس</h1>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-yellow-500 cursor-pointer transition">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-500 cursor-pointer transition">
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 cursor-pointer transition">
              تواصل معنا
            </Link>
          </li>
          <li>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="relative bg-red-400 text-white py-1 px-4 rounded-full hover:bg-red-500 transition"
            >
              ❤️ المفضلة
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-yellow-400 text-white py-1 px-4 rounded-full hover:bg-yellow-500 transition"
            >
              {darkMode ? '☀️ فاتح' : '🌙 داكن'}
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">الرئيسية</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-500 transition">المنتجات</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">تواصل معنا</Link>
          </li>
          <li>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="relative bg-red-400 text-white py-1 px-4 rounded-full hover:bg-red-500 transition"
            >
              ❤️ المفضلة
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-yellow-400 text-white py-1 px-4 rounded-full hover:bg-yellow-500 transition"
            >
              {darkMode ? '☀️ فاتح' : '🌙 داكن'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar