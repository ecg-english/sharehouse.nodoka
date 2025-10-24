'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaUser, FaEye, FaHeart, FaComment } from 'react-icons/fa'

interface Article {
  id: string
  title: string
  content: string
  author: string
  date: string
  image?: string
  video?: string
  views: number
  likes: number
  comments: number
  category: string
}

const AlbumSection = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // モックデータ（実際のデータベース連携時は削除）
  useEffect(() => {
    const mockArticles: Article[] = [
      {
        id: '1',
        title: '春の新入居者ウェルカムパーティー開催！',
        content: '4月に入り、新しい入居者の皆さんを迎えるウェルカムパーティーを開催しました。みんなで手作り料理を楽しみながら、新しい仲間との出会いを祝いました。',
        author: '管理者',
        date: '2024-04-15',
        image: '/images/article1.jpg',
        views: 156,
        likes: 23,
        comments: 8,
        category: 'イベント',
      },
      {
        id: '2',
        title: 'のどかでの朝活ルーティン紹介',
        content: '入居者の田中さんに、のどかでの朝活ルーティンを紹介していただきました。早起きして朝日を浴びながらの散歩や、みんなで朝食を楽しむ時間など、健康的な生活スタイルを送られています。',
        author: '管理者',
        date: '2024-04-12',
        image: '/images/article2.jpg',
        views: 89,
        likes: 15,
        comments: 5,
        category: 'ライフスタイル',
      },
      {
        id: '3',
        title: 'シェアハウスでの料理教室開催レポート',
        content: '先週末、入居者の皆さんと一緒に料理教室を開催しました。今回は手作りパスタに挑戦！みんなで協力して作ったパスタは格別の味でした。',
        author: '管理者',
        date: '2024-04-10',
        image: '/images/article3.jpg',
        views: 203,
        likes: 31,
        comments: 12,
        category: 'イベント',
      },
      {
        id: '4',
        title: 'のどか周辺のおすすめスポット紹介',
        content: 'のどかから徒歩圏内にあるおすすめスポットを紹介します。カフェ、レストラン、公園など、入居者の皆さんに人気の場所をまとめました。',
        author: '管理者',
        date: '2024-04-08',
        image: '/images/article4.jpg',
        views: 134,
        likes: 19,
        comments: 7,
        category: '地域情報',
      },
      {
        id: '5',
        title: '入居者インタビュー：佐藤さんののどかライフ',
        content: '入居して半年が経った佐藤さんに、のどかでの生活についてインタビューしました。シェアハウス生活の魅力や、仲間との交流について語っていただきました。',
        author: '管理者',
        date: '2024-04-05',
        image: '/images/article5.jpg',
        views: 178,
        likes: 27,
        comments: 9,
        category: 'インタビュー',
      },
      {
        id: '6',
        title: 'のどかの庭でガーデニング開始！',
        content: '春の訪れとともに、のどかの庭でガーデニングを始めました。入居者の皆さんと一緒に野菜やハーブを育てています。収穫が楽しみです！',
        author: '管理者',
        date: '2024-04-03',
        image: '/images/article6.jpg',
        views: 95,
        likes: 18,
        comments: 6,
        category: 'ライフスタイル',
      },
    ]

    // 実際のAPI呼び出しをシミュレート
    setTimeout(() => {
      setArticles(mockArticles)
      setLoading(false)
    }, 1000)
  }, [])

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'イベント', name: 'イベント' },
    { id: 'ライフスタイル', name: 'ライフスタイル' },
    { id: '地域情報', name: '地域情報' },
    { id: 'インタビュー', name: 'インタビュー' },
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            アルバム&記事
          </h1>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            シェアハウスのどかでの日常やイベントの様子を記事でお届けします
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-nodoka-orange text-white shadow-lg'
                  : 'bg-nodoka-gray text-nodoka-dark hover:bg-nodoka-orange/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nodoka-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=${encodeURIComponent(article.title)}`
                      }}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-nodoka-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-nodoka-dark mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-nodoka-dark/70 mb-4 line-clamp-3">
                    {article.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-nodoka-dark/60 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaUser className="text-nodoka-orange" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-nodoka-orange" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-nodoka-dark/60">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaEye className="text-blue-500" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaHeart className="text-red-500" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaComment className="text-green-500" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <button className="text-nodoka-orange hover:text-nodoka-orange-dark font-medium">
                      続きを読む
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {filteredArticles.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-nodoka-dark/60 text-lg">
              該当する記事が見つかりませんでした。
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-nodoka-orange/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nodoka-dark mb-4">
              最新情報をお届け
            </h3>
            <p className="text-nodoka-dark/80 mb-6">
              のどかでの最新のイベントや日常の様子を定期的に更新しています。
              お気に入りの記事があれば、ぜひシェアしてください！
            </p>
            <a
              href="/contact"
              className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              お問い合わせはこちら
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AlbumSection
