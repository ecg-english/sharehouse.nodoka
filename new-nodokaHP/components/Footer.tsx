import Link from 'next/link'
import { FaInstagram, FaLine, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-nodoka-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-nodoka-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">シェアハウス のどか</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              のんびりスローライフの中に情熱を持って全力で人生を生きる人たちが集まる場所。
              仕事や趣味など自分のやりたいことに全力な人たちと出会い、最高の生活を送りませんか？
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/sharehouse_nodoka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://line.me/ti/p/@nodoka-sharehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
              >
                <FaLine size={20} />
              </a>
              <a
                href="mailto:info@nodoka-sharehouse.com"
                className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white hover:bg-teal-600 transition-colors duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/movein-guide" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  入居案内
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  コンタクト
                </Link>
              </li>
              <li>
                <Link href="/sns" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  SNS
                </Link>
              </li>
              <li>
                <Link href="/album" className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300">
                  アルバム&記事
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-nodoka-orange" size={16} />
                <a
                  href="tel:078-381-8061"
                  className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300"
                >
                  078-381-8061
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-nodoka-orange" size={16} />
                <a
                  href="mailto:info@nodoka-sharehouse.com"
                  className="text-gray-300 hover:text-nodoka-orange transition-colors duration-300"
                >
                  info@nodoka-sharehouse.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-nodoka-orange mt-1" size={16} />
                <div className="text-gray-300">
                  <div>〒650-0013</div>
                  <div>兵庫県神戸市中央区花隈町17-14</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 シェアハウス のどか. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
