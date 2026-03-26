import { useState } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import { furnitureData } from './data/furniture'

function AnimatedRoutes({ darkMode, filteredData, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, favorites, toggleFavorite, setSelectedItem, showFavorites }) {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home
              darkMode={darkMode}
              filteredData={filteredData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              setSelectedItem={setSelectedItem}
              showFavorites={showFavorites}
            />
          </PageTransition>
        } />
        <Route path="/products" element={
          <PageTransition>
            <Products
              darkMode={darkMode}
              filteredData={filteredData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              setSelectedItem={setSelectedItem}
            />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact darkMode={darkMode} />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedItem, setSelectedItem] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)

  const toggleFavorite = (item) => {
    setFavorites(prev =>
      prev.find(f => f.id === item.id)
        ? prev.filter(f => f.id !== item.id)
        : [...prev, item]
    )
  }

  const filteredData = furnitureData
    .filter(item => selectedCategory === "الكل" || item.category === selectedCategory)
    .filter(item => item.name.includes(searchQuery))

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen transition duration-300`}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          favoritesCount={favorites.length}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />
        <AnimatedRoutes
          darkMode={darkMode}
          filteredData={filteredData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setSelectedItem={setSelectedItem}
          showFavorites={showFavorites}
        />
        <Footer darkMode={darkMode} />
        {selectedItem && (
          <ProductModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App