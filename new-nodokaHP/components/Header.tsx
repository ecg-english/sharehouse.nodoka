'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPhone, FaLine, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'TOP', href: '/' },
    { name: '入居案内', href: '/movein-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'コンタクト', href: '/contact' },
    { name: 'SNS', href: '/sns' },
    { name: 'アルバム&記事', href: '/album' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-nodoka-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-nodoka-dark">シェアハウス のどか</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-nodoka-orange'
                    : 'text-nodoka-dark hover:text-nodoka-orange'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-nodoka-orange rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:078-381-8061"
              className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
            >
              <FaPhone size={16} />
            </a>
            <a
              href="https://line.me/ti/p/@nodoka-sharehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
            >
              <FaLine size={16} />
            </a>
            <a
              href="mailto:info@nodoka-sharehouse.com"
              className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white hover:bg-teal-600 transition-colors duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-nodoka-dark hover:text-nodoka-orange focus:outline-none focus:ring-2 focus:ring-nodoka-orange"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-nodoka-orange bg-nodoka-orange/10'
                      : 'text-nodoka-dark hover:text-nodoka-orange hover:bg-nodoka-orange/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 px-3 py-2">
                <a
                  href="tel:078-381-8061"
                  className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                >
                  <FaPhone size={16} />
                </a>
                <a
                  href="https://line.me/ti/p/@nodoka-sharehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
                >
                  <FaLine size={16} />
                </a>
                <a
                  href="mailto:info@nodoka-sharehouse.com"
                  className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white hover:bg-teal-600 transition-colors duration-300"
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
