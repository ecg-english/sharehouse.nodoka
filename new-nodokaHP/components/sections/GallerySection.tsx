'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const rooms = [
    {
      id: 1,
      name: 'リビングルーム',
      description: 'みんなで集まって過ごす共有スペース',
      image: '/images/room1.jpg',
    },
    {
      id: 2,
      name: 'キッチン',
      description: '料理を楽しみながら交流できる空間',
      image: '/images/room2.jpg',
    },
    {
      id: 3,
      name: '個室',
      description: 'プライベートな時間を過ごす落ち着いた空間',
      image: '/images/room3.jpg',
    },
    {
      id: 4,
      name: 'バスルーム',
      description: '清潔で快適な入浴空間',
      image: '/images/room4.jpg',
    },
    {
      id: 5,
      name: '洗面所',
      description: '朝の身支度を快適に行える空間',
      image: '/images/room5.jpg',
    },
    {
      id: 6,
      name: 'ベランダ',
      description: '自然を感じながらリラックスできる空間',
      image: '/images/room6.jpg',
    },
    {
      id: 7,
      name: 'ダイニングエリア',
      description: 'みんなで食事を楽しむ温かい空間',
      image: '/images/room7.jpg',
    },
    {
      id: 8,
      name: '玄関',
      description: 'お迎えする明るいエントランス',
      image: '/images/room8.jpg',
    },
    {
      id: 9,
      name: '書斎スペース',
      description: '集中して作業できる静かな空間',
      image: '/images/room9.jpg',
    },
    {
      id: 10,
      name: '洗濯機置き場',
      description: '便利で使いやすいランドリーエリア',
      image: '/images/room10.jpg',
    },
    {
      id: 11,
      name: '収納スペース',
      description: '整理整頓された収納エリア',
      image: '/images/room11.jpg',
    },
    {
      id: 12,
      name: '共有デスク',
      description: 'みんなで使えるワークスペース',
      image: '/images/room12.jpg',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            ギャラリー
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            のどかの心地よい空間をご紹介します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(room.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=${encodeURIComponent(room.name)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
                  <p className="text-sm">{room.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={rooms.find(room => room.id === selectedImage)?.image}
                alt={rooms.find(room => room.id === selectedImage)?.name}
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x600/FF6B35/FFFFFF?text=${encodeURIComponent(rooms.find(room => room.id === selectedImage)?.name || '')}`
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection
