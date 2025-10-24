'use client'

import { motion } from 'framer-motion'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import AnimatedTitle from '../AnimatedTitle'
import AnimatedOrangeSubtitle from '../AnimatedOrangeSubtitle'

const SNSHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white">
          {/* Refined geometric elements with shadows */}
          <div className="absolute top-20 right-20 w-2 h-32 bg-nodoka-orange/20 rotate-12 shadow-lg shadow-nodoka-orange/10" />
          <div className="absolute bottom-32 left-16 w-1 h-24 bg-nodoka-orange/15 rotate-45 shadow-md shadow-nodoka-orange/5" />
          <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-nodoka-orange/10 -rotate-12 shadow-sm shadow-nodoka-orange/5" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="mb-12">
              <AnimatedTitle
                text="SNS"
                delay={0.2}
                className="text-5xl md:text-7xl font-bold text-nodoka-dark mb-8 tracking-tight"
              />
              
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8, 
                  ease: "easeOut" 
                }}
                className="w-32 h-1 bg-gradient-to-r from-transparent via-nodoka-orange to-transparent mx-auto mb-8"
                style={{
                  boxShadow: '0 2px 10px rgba(255, 107, 53, 0.3)'
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-nodoka-dark/80 leading-relaxed font-medium mb-4">
                シェアハウスのどかの日常やイベントの様子をInstagramで発信しています
              </p>
              <AnimatedOrangeSubtitle
                text="フォローして一緒に楽しみましょう"
                delay={1.2}
                className="text-lg md:text-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Breadcrumbs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex items-center space-x-3 text-nodoka-dark/70 text-sm">
            <FaHome className="w-4 h-4" />
            <FaChevronRight className="w-3 h-3" />
            <span className="font-semibold tracking-wide">SNS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SNSHero
