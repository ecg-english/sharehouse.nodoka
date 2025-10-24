'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedTitleProps {
  text: string
  delay?: number
  className?: string
  shadow?: boolean
  letterSpacing?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  justify?: 'start' | 'center' | 'end'
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  delay = 0,
  className = '',
  shadow = true,
  letterSpacing = '-0.02em',
  as: Component = 'h1',
  justify = 'center',
}) => {
  const textShadowStyle = shadow
    ? { textShadow: '0 4px 20px rgba(255, 107, 53, 0.1)' }
    : {}

  return (
    <Component
      className={`${className} flex ${justify === 'start' ? 'justify-start' : justify === 'end' ? 'justify-end' : 'justify-center'} items-center`}
      style={{
        ...textShadowStyle,
        letterSpacing: letterSpacing,
        transformStyle: 'preserve-3d',
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0, 
            x: -150, 
            rotateZ: -360,
            scale: 0.5
          }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotateZ: 0,
            scale: 1
          }}
          transition={{
            duration: 1.8,
            delay: delay + (index * 0.2),
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 60,
            damping: 15
          }}
          className="inline-block"
          style={{
            textShadow: shadow ? '0 4px 20px rgba(255, 107, 53, 0.1)' : 'none',
            letterSpacing: letterSpacing,
            transformStyle: 'preserve-3d'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  )
}

export default AnimatedTitle
