'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaEnvelope, FaEye, FaKey, FaStar, FaPlay } from 'react-icons/fa'

const MoveInSection = () => {
  const steps = [
    {
      icon: FaEnvelope,
      emoji: '💌',
      title: 'お問い合わせ',
      description: 'まずは気軽にご連絡ください！',
      detail: 'どんなことでもお気軽に',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaEye,
      emoji: '👀',
      title: '見学・体験',
      description: '実際にのどかを体験してみてください',
      detail: 'きっと気に入っていただけます',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FaKey,
      emoji: '🗝️',
      title: '入居スタート',
      description: '新しい生活の始まりです！',
      detail: '素敵な出会いが待っています',
      color: 'from-purple-400 to-purple-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-nodoka-orange/5 via-white to-nodoka-orange-light/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-nodoka-orange/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-nodoka-orange-light/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaStar className="text-nodoka-orange text-2xl mr-3" />
            <h2 className="text-4xl md:text-6xl font-bold text-nodoka-dark">
              入居案内
            </h2>
            <FaStar className="text-nodoka-orange text-2xl ml-3" />
          </div>
          <p className="text-xl md:text-2xl text-nodoka-dark/70 max-w-3xl mx-auto leading-relaxed">
            のどかでの新しい生活を始めませんか？
            <br />
            <span className="text-nodoka-orange font-semibold">素敵な出会い</span>が待っています✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-nodoka-orange text-white rounded-full flex items-center justify-center font-bold text-sm z-20">
                {index + 1}
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <step.icon className="text-white text-2xl" />
                </div>
                
                {/* Emoji */}
                <div className="text-4xl mb-4">{step.emoji}</div>
                
                <h3 className="text-2xl font-bold text-nodoka-dark mb-3 group-hover:text-nodoka-orange transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-nodoka-dark/80 text-lg mb-2 font-medium">
                  {step.description}
                </p>
                <p className="text-nodoka-dark/60 text-sm">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun connecting arrows */}
        <div className="hidden md:flex justify-center items-center mb-12">
          <div className="flex items-center space-x-8">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-nodoka-orange text-2xl"
            >
              →
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-nodoka-orange text-2xl"
            >
              →
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-nodoka-orange to-nodoka-orange-light rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <FaPlay className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">
                さあ、始めましょう！
              </h3>
            </div>
            <p className="text-white/90 mb-6 text-lg">
              詳細な入居案内で、のどかでの生活をイメージしてみてください
            </p>
            <Link
              href="/movein-guide"
              className="inline-flex items-center gap-3 bg-white text-nodoka-orange font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50"
            >
              詳細な入居案内を見る
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MoveInSection