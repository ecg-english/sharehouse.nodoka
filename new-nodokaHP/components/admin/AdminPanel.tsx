'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaLock, FaPlus, FaEdit, FaTrash, FaEye, FaSave, FaTimes } from 'react-icons/fa'

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

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [articles, setArticles] = useState<Article[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    category: 'イベント',
    image: '',
  })

  const categories = ['イベント', 'ライフスタイル', '地域情報', 'インタビュー']

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
    ]
    setArticles(mockArticles)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'Nodoka!2510') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('パスワードが正しくありません')
    }
  }

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault()
    const article: Article = {
      id: Date.now().toString(),
      title: newArticle.title,
      content: newArticle.content,
      author: '管理者',
      date: new Date().toISOString().split('T')[0],
      image: newArticle.image,
      views: 0,
      likes: 0,
      comments: 0,
      category: newArticle.category,
    }
    setArticles([article, ...articles])
    setNewArticle({ title: '', content: '', category: 'イベント', image: '' })
    setShowAddForm(false)
  }

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article)
    setIsEditing(true)
  }

  const handleUpdateArticle = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingArticle) {
      setArticles(articles.map(article => 
        article.id === editingArticle.id 
          ? { ...editingArticle, date: new Date().toISOString().split('T')[0] }
          : article
      ))
      setIsEditing(false)
      setEditingArticle(null)
    }
  }

  const handleDeleteArticle = (id: string) => {
    if (confirm('この記事を削除しますか？')) {
      setArticles(articles.filter(article => article.id !== id))
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (!isAuthenticated) {
    return (
      <section className="pt-20 pb-20 bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-nodoka-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-white text-2xl" />
              </div>
              <h1 className="text-2xl font-bold text-nodoka-dark mb-2">
                管理者ログイン
              </h1>
              <p className="text-nodoka-dark/70">
                パスワードを入力してください
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-nodoka-dark mb-2">
                  パスワード
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  placeholder="パスワードを入力"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-lg font-medium"
              >
                ログイン
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-20 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-nodoka-dark mb-2">
                管理者パネル
              </h1>
              <p className="text-nodoka-dark/70">
                アルバム&記事ページの管理
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary flex items-center gap-2"
            >
              <FaPlus />
              新しい記事を追加
            </button>
          </div>
        </motion.div>

        {/* Add Article Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-nodoka-gray rounded-2xl p-8 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-nodoka-dark">新しい記事を追加</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-nodoka-dark/60 hover:text-nodoka-dark"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleAddArticle} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-nodoka-dark mb-2">
                    タイトル
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                    placeholder="記事のタイトルを入力"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-nodoka-dark mb-2">
                    カテゴリー
                  </label>
                  <select
                    id="category"
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-nodoka-dark mb-2">
                  画像URL
                </label>
                <input
                  type="url"
                  id="image"
                  value={newArticle.image}
                  onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  placeholder="画像のURLを入力"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-nodoka-dark mb-2">
                  内容
                </label>
                <textarea
                  id="content"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  placeholder="記事の内容を入力"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaSave />
                  記事を追加
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Edit Article Form */}
        {isEditing && editingArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-nodoka-gray rounded-2xl p-8 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-nodoka-dark">記事を編集</h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-nodoka-dark/60 hover:text-nodoka-dark"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleUpdateArticle} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="edit-title" className="block text-sm font-medium text-nodoka-dark mb-2">
                    タイトル
                  </label>
                  <input
                    type="text"
                    id="edit-title"
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="edit-category" className="block text-sm font-medium text-nodoka-dark mb-2">
                    カテゴリー
                  </label>
                  <select
                    id="edit-category"
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="edit-image" className="block text-sm font-medium text-nodoka-dark mb-2">
                  画像URL
                </label>
                <input
                  type="url"
                  id="edit-image"
                  value={editingArticle.image || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="edit-content" className="block text-sm font-medium text-nodoka-dark mb-2">
                  内容
                </label>
                <textarea
                  id="edit-content"
                  value={editingArticle.content}
                  onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nodoka-orange focus:border-transparent"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn-secondary"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                >
                  <FaSave />
                  変更を保存
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-nodoka-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-nodoka-dark/60">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-nodoka-dark mb-2">
                    {article.title}
                  </h3>
                  <p className="text-nodoka-dark/70 line-clamp-2">
                    {article.content}
                  </p>
                </div>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-lg ml-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-nodoka-dark/60">
                  <span>閲覧: {article.views}</span>
                  <span>いいね: {article.likes}</span>
                  <span>コメント: {article.comments}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="/album"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                  >
                    <FaEye />
                  </a>
                  <button
                    onClick={() => handleEditArticle(article)}
                    className="p-2 text-nodoka-orange hover:bg-nodoka-orange/10 rounded-lg transition-colors duration-300"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
