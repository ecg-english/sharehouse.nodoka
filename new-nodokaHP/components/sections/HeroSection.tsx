'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const mainImages = [
    {
      src: '/images/hero1.jpg',
      alt: 'リビングルーム - 明るく開放的な共有スペース',
    },
    {
      src: '/images/hero2.jpg',
      alt: 'キッチン - みんなで料理を楽しめる空間',
    },
    {
      src: '/images/hero3.jpg',
      alt: '個室 - プライベートな時間を過ごす落ち着いた空間',
    },
    {
      src: '/images/hero4.jpg',
      alt: 'ダイニングエリア - みんなで食事を楽しむ空間',
    },
    {
      src: '/images/hero5.jpg',
      alt: 'バスルーム - 清潔で快適な入浴空間',
    },
    {
      src: '/images/hero6.jpg',
      alt: 'ベランダ - 自然を感じながらリラックスできる空間',
    },
  ]

  const thumbnailImages = [
    { src: '/images/thumb1.jpg', alt: 'ダイニングエリア' },
    { src: '/images/thumb2.jpg', alt: 'リビングエリア' },
    { src: '/images/thumb3.jpg', alt: 'ベッドルーム' },
    { src: '/images/thumb4.jpg', alt: 'バスルーム' },
    { src: '/images/thumb5.jpg', alt: '廊下' },
    { src: '/images/thumb6.jpg', alt: '共有スペース' },
    { src: '/images/thumb7.jpg', alt: 'キッチン' },
    { src: '/images/thumb8.jpg', alt: 'エントランス' },
    { src: '/images/thumb9.jpg', alt: '洗面所' },
    { src: '/images/thumb10.jpg', alt: 'ベランダ' },
    { src: '/images/thumb11.jpg', alt: '玄関' },
    { src: '/images/thumb12.jpg', alt: '書斎スペース' },
    { src: '/images/thumb13.jpg', alt: '洗濯機置き場' },
    { src: '/images/thumb14.jpg', alt: '収納スペース' },
    { src: '/images/thumb15.jpg', alt: '共有デスク' },
    { src: '/images/thumb16.jpg', alt: '屋外スペース' },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mainImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length)
  }

  return (
    <section className="relative min-h-screen bg-white">
      {/* Main Image Gallery */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {mainImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/1200x800/FF6B35/FFFFFF?text=${encodeURIComponent(image.alt)}`
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 z-10"
        >
          <FaChevronLeft className="text-nodoka-dark text-lg" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 z-10"
        >
          <FaChevronRight className="text-nodoka-dark text-lg" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {mainImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {thumbnailImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/200x200/FF6B35/FFFFFF?text=${encodeURIComponent(image.alt)}`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-nodoka-dark mb-6">
              <span className="block">シェアハウス</span>
              <span className="block text-nodoka-orange">のどか</span>
            </h1>
            
            <p className="text-lg md:text-xl text-nodoka-dark/80 max-w-3xl mx-auto leading-relaxed">
              のんびりスローライフの中に情熱を持って全力で人生を生きる
              <br />
              そんな人たちが集まる場所
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.a
                href="/movein-guide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                入居案内を見る
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                お問い合わせ
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
