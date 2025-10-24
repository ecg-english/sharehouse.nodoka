'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaHeart, FaComment, FaShare } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import AnimatedTitle from '../AnimatedTitle'

interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  comments: number
  date: string
  link: string
}

const SNSSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  // モックデータ（実際のInstagram API連携時は削除）
  useEffect(() => {
    const mockPosts: InstagramPost[] = [
      {
        id: '1',
        image: '/images/instagram1.jpg',
        caption: '今日は入居者の皆さんと一緒にBBQをしました！🍖 のどかでの楽しい時間を共有できて嬉しいです✨ #シェアハウスのどか #BBQ #仲間',
        likes: 24,
        comments: 8,
        date: '2024-01-15',
        link: 'https://www.instagram.com/p/example1',
      },
      {
        id: '2',
        image: '/images/instagram2.jpg',
        caption: '朝のリビングルーム🌅 自然光が差し込む心地よい空間で、みんなで朝食を楽しんでいます☕ #朝活 #シェアハウス #のんびりライフ',
        likes: 18,
        comments: 5,
        date: '2024-01-14',
        link: 'https://www.instagram.com/p/example2',
      },
      {
        id: '3',
        image: '/images/instagram3.jpg',
        caption: '新しい入居者の田中さんを迎える会を開催しました🎉 のどかの温かいコミュニティに新しい仲間が加わりました！ #新入居者 #ウェルカムパーティー',
        likes: 32,
        comments: 12,
        date: '2024-01-13',
        link: 'https://www.instagram.com/p/example3',
      },
      {
        id: '4',
        image: '/images/instagram4.jpg',
        caption: 'キッチンでの料理タイム👨‍🍳 みんなで協力して作った手作りパスタが完成！シェアハウスならではの共同作業が楽しいです🍝 #料理 #共同作業 #パスタ',
        likes: 28,
        comments: 9,
        date: '2024-01-12',
        link: 'https://www.instagram.com/p/example4',
      },
      {
        id: '5',
        image: '/images/instagram5.jpg',
        caption: 'ベランダからの夕日🌇 忙しい一日の終わりに、こんな美しい景色を見ながらリラックス。のどかでの生活は本当に贅沢です✨ #夕日 #リラックス #贅沢な時間',
        likes: 21,
        comments: 6,
        date: '2024-01-11',
        link: 'https://www.instagram.com/p/example5',
      },
      {
        id: '6',
        image: '/images/instagram6.jpg',
        caption: '読書会を開催しました📚 みんなで同じ本を読んで感想を共有。新しい視点や発見があってとても勉強になります！ #読書会 #学習 #交流',
        likes: 15,
        comments: 7,
        date: '2024-01-10',
        link: 'https://www.instagram.com/p/example6',
      },
    ]

    // 実際のAPI呼び出しをシミュレート
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

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
          
          <a
            href="https://www.instagram.com/sharehouse_nodoka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-lg font-semibold">@sharehouse_nodoka をフォロー</span>
          </a>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nodoka-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt="Instagram投稿"
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=${encodeURIComponent('Instagram Post')}`
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 rounded-full p-2">
                        <FaInstagram className="text-white text-lg" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-nodoka-dark/80 text-sm mb-4 line-clamp-3">
                      {post.caption}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-nodoka-dark/60">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FaHeart className="text-red-500" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaComment className="text-blue-500" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-nodoka-orange/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nodoka-dark mb-4">
              もっと見たい方はInstagramへ
            </h3>
            <p className="text-nodoka-dark/80 mb-6">
              最新の投稿やストーリーはInstagramでチェック！
              フォローしてのどかの日常を一緒に楽しみましょう。
            </p>
            <a
              href="https://www.instagram.com/sharehouse_nodoka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram className="text-2xl" />
              <span className="text-lg font-semibold">Instagramで見る</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SNSSection
