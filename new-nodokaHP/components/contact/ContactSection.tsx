'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaLine, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import AnimatedTitle from '../AnimatedTitle'

const ContactSection = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: 'お電話でのお問い合わせ',
      description: 'いつでもお気軽にお電話ください',
      detail: '078-381-8061',
      subDetail: '受付時間: 24時間いつでもお気軽にご連絡ください',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      link: 'tel:078-381-8061',
    },
    {
      icon: FaLine,
      title: 'LINEでのお問い合わせ',
      description: '24時間いつでもお気軽にご連絡ください',
      detail: '@nodoka-sharehouse',
      subDetail: '友だち追加してメッセージをお送りください',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://line.me/ti/p/@nodoka-sharehouse',
    },
    {
      icon: FaEnvelope,
      title: 'メールでのお問い合わせ',
      description: '詳細なご質問はメールでお送りください',
      detail: 'info@nodoka-sharehouse.com',
      subDetail: '24時間以内にご返信いたします',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      link: 'mailto:info@nodoka-sharehouse.com',
    },
    {
      icon: FaInstagram,
      title: 'Instagramでのお問い合わせ',
      description: '最新情報や日常の様子をチェック',
      detail: '@sharehouse_nodoka',
      subDetail: 'DMでもお気軽にお問い合わせください',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600',
      link: 'https://www.instagram.com/sharehouse_nodoka',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${method.color} ${method.hoverColor} text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <method.icon className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-white/90 mb-4">{method.description}</p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-lg font-semibold mb-1">{method.detail}</p>
                    <p className="text-sm text-white/80">{method.subDetail}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Office Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-nodoka-gray rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-nodoka-dark mb-8 text-center">
            事務所情報
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nodoka-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nodoka-dark mb-3">住所</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-nodoka-dark">〒654-0001</p>
                    <p className="text-nodoka-dark/80">
                      兵庫県神戸市須磨区禅昌寺町1丁目27-5
                    </p>
                    <p className="text-nodoka-dark/80">
                      シェアハウス のどか
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nodoka-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nodoka-dark mb-3">営業時間</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-nodoka-dark/80">平日</span>
                      <span className="font-semibold text-nodoka-dark">24時間いつでもお気軽にご連絡ください</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-nodoka-dark/80">土日祝</span>
                      <span className="font-semibold text-nodoka-dark">　24時間いつでもお気軽にご連絡ください</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-nodoka-orange/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nodoka-dark mb-4">
              よくある質問はこちら
            </h3>
            <p className="text-nodoka-dark/80 mb-6">
              入居に関するよくあるご質問をまとめています。
              まずはこちらをご確認ください。
            </p>
            <a
              href="/sharehouse-nodoka/faq"
              className="btn-secondary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              FAQを見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
