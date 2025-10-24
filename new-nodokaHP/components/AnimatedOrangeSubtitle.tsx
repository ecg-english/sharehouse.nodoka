'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedOrangeSubtitleProps {
  text: string
  delay?: number
  className?: string
  shadow?: boolean
  letterSpacing?: string
  as?: 'p' | 'span' | 'div'
}

const AnimatedOrangeSubtitle: React.FC<AnimatedOrangeSubtitleProps> = ({
  text,
  delay = 0,
  className = '',
  shadow = true,
  letterSpacing = '0.05em',
  as: Component = 'p',
}) => {
  const textShadowStyle = shadow
    ? { textShadow: '0 2px 10px rgba(255, 107, 53, 0.2)' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      <Component
        className={`text-nodoka-orange font-semibold tracking-wide ${className}`}
        style={{
          ...textShadowStyle,
          letterSpacing: letterSpacing,
        }}
      >
        {text}
      </Component>
    </motion.div>
  )
}

export default AnimatedOrangeSubtitle
