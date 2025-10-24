'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const PhotoShowcaseSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photoCategories = [
    {
      title: '日常の風景',
      photos: [
        { src: '/images/daily1.jpg', alt: '朝の光が差し込むリビング' },
        { src: '/images/daily2.jpg', alt: '夕方の温かいキッチン' },
        { src: '/images/daily3.jpg', alt: '読書タイムの個室' },
        { src: '/images/daily4.jpg', alt: '洗濯物を干すベランダ' },
        { src: '/images/daily5.jpg', alt: '朝食を楽しむダイニング' },
        { src: '/images/daily6.jpg', alt: '夜のリラックスタイム' },
      ]
    },
    {
      title: 'イベント・交流',
      photos: [
        { src: '/images/event1.jpg', alt: 'みんなで料理を作る様子' },
        { src: '/images/event2.jpg', alt: '誕生日パーティーの風景' },
        { src: '/images/event3.jpg', alt: 'ゲーム大会の様子' },
        { src: '/images/event4.jpg', alt: '映画鑑賞会' },
        { src: '/images/event5.jpg', alt: 'BBQパーティー' },
        { src: '/images/event6.jpg', alt: '季節のイベント' },
      ]
    },
    {
      title: '季節の変化',
      photos: [
        { src: '/images/season1.jpg', alt: '春の新緑' },
        { src: '/images/season2.jpg', alt: '夏の青空' },
        { src: '/images/season3.jpg', alt: '秋の紅葉' },
        { src: '/images/season4.jpg', alt: '冬の雪景色' },
        { src: '/images/season5.jpg', alt: '桜の季節' },
        { src: '/images/season6.jpg', alt: 'クリスマスの装飾' },
      ]
    }
  ]

  const allPhotos = photoCategories.flatMap(category => 
    category.photos.map((photo, index) => ({
      ...photo,
      category: category.title,
      id: `${category.title}-${index}`
    }))
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            フォトギャラリー
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            のどかでの生活の様子を写真でお伝えします
          </p>
        </motion.div>

        {photoCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-nodoka-dark mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(
                    allPhotos.findIndex(p => p.id === `${category.title}-${index}`)
                  )}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=${encodeURIComponent(photo.alt)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-medium truncate">{photo.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={allPhotos[selectedImage]?.src}
                alt={allPhotos[selectedImage]?.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x600/FF6B35/FFFFFF?text=${encodeURIComponent(allPhotos[selectedImage]?.alt || '')}`
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold">{allPhotos[selectedImage]?.alt}</p>
                <p className="text-sm opacity-80">{allPhotos[selectedImage]?.category}</p>
              </div>
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

export default PhotoShowcaseSection
