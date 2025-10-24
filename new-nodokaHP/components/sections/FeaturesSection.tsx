'use client'

import { motion } from 'framer-motion'
import AnimatedTitle from '../AnimatedTitle'

const FeaturesSection = () => {
  const features = [
    {
      title: 'のんびりスローライフ',
      description: '山に囲まれた空気の綺麗なのどかなお家です。ハンモックに揺られながら気持ちよく読書したりお昼寝することもできます。',
    },
    {
      title: '人生を全力で生きる',
      description: 'のどかな環境の中で情熱を持って色々な生き方をする人たちが住んでいます',
    },
    {
      title: '様々な出会い',
      description: '芋掘りイベントや哲学イベントなどなど面白いイベントがたくさんあり、住人以外にも色々な面白い人たちと出会うことができます',
    },
    {
      title: '作業部屋あり',
      description: '黙々と集中するための作業部屋もあります。',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedTitle
            text="特徴"
            delay={0.2}
            className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6"
            as="h2"
          />
          <div className="w-16 h-1 bg-nodoka-orange mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold text-nodoka-dark mb-2">
                    {feature.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-nodoka-dark/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-nodoka-dark mb-8">
            のどかでの生活を動画で見る
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-nodoka-dark/10 rounded-2xl overflow-hidden">
              <img
                src="/images/video-thumbnail.jpg"
                alt="シェアハウスのどか紹介動画"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x450/FF6B35/FFFFFF?text=${encodeURIComponent('シェアハウスのどか紹介動画')}`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-nodoka-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-nodoka-orange-dark transition-colors duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection