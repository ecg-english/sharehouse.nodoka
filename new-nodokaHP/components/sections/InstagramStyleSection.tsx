'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const InstagramStyleSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const instagramPhotos = [
    { src: '/images/insta1.jpg', alt: '朝のコーヒータイム', likes: 24, comments: 8 },
    { src: '/images/insta2.jpg', alt: 'みんなで作った夕食', likes: 31, comments: 12 },
    { src: '/images/insta3.jpg', alt: '読書の時間', likes: 18, comments: 5 },
    { src: '/images/insta4.jpg', alt: 'ベランダの植物', likes: 27, comments: 9 },
    { src: '/images/insta5.jpg', alt: 'ゲーム大会', likes: 42, comments: 15 },
    { src: '/images/insta6.jpg', alt: '洗濯物を干す', likes: 15, comments: 3 },
    { src: '/images/insta7.jpg', alt: '映画鑑賞会', likes: 33, comments: 11 },
    { src: '/images/insta8.jpg', alt: '誕生日パーティー', likes: 56, comments: 23 },
    { src: '/images/insta9.jpg', alt: '朝食の準備', likes: 22, comments: 7 },
    { src: '/images/insta10.jpg', alt: '夜のリラックスタイム', likes: 29, comments: 10 },
    { src: '/images/insta11.jpg', alt: '季節の装飾', likes: 35, comments: 13 },
    { src: '/images/insta12.jpg', alt: 'みんなで掃除', likes: 19, comments: 6 },
    { src: '/images/insta13.jpg', alt: 'BBQパーティー', likes: 48, comments: 18 },
    { src: '/images/insta14.jpg', alt: '勉強会', likes: 26, comments: 8 },
    { src: '/images/insta15.jpg', alt: 'お花見', likes: 41, comments: 16 },
    { src: '/images/insta16.jpg', alt: 'クリスマスパーティー', likes: 52, comments: 21 },
    { src: '/images/insta17.jpg', alt: '新入居者歓迎会', likes: 38, comments: 14 },
    { src: '/images/insta18.jpg', alt: '夏祭り準備', likes: 44, comments: 17 },
    { src: '/images/insta19.jpg', alt: '秋の収穫祭', likes: 37, comments: 12 },
    { src: '/images/insta20.jpg', alt: '冬の鍋パーティー', likes: 45, comments: 19 },
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
            #のどかライフ
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            住人の皆さんが投稿した日常の写真をチェック！
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {instagramPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=${encodeURIComponent(photo.alt)}`
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Like and Comment overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{photo.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{photo.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl max-h-full bg-white rounded-lg overflow-hidden">
              <img
                src={instagramPhotos[selectedImage]?.src}
                alt={instagramPhotos[selectedImage]?.alt}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=${encodeURIComponent(instagramPhotos[selectedImage]?.alt || '')}`
                }}
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-nodoka-dark mb-2">
                  {instagramPhotos[selectedImage]?.alt}
                </p>
                <div className="flex items-center space-x-4 text-nodoka-dark/70">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{instagramPhotos[selectedImage]?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{instagramPhotos[selectedImage]?.comments}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-nodoka-dark hover:bg-white transition-colors duration-300"
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

export default InstagramStyleSection
