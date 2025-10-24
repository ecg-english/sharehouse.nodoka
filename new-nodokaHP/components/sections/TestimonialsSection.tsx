'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: '田中さん',
      age: 25,
      occupation: 'デザイナー',
      content: 'のどかで過ごす時間は本当に特別です。忙しい仕事の合間に、ここでリラックスできる時間があることで、より充実した生活を送れています。',
      rating: 5,
    },
    {
      name: '佐藤さん',
      age: 28,
      occupation: 'エンジニア',
      content: '同じ志を持つ仲間たちと出会えて、お互いを高め合える環境が最高です。一人では続かなかった趣味も、みんなと一緒なら続けられます。',
      rating: 5,
    },
    {
      name: '山田さん',
      age: 23,
      occupation: '学生',
      content: '初めての一人暮らしでしたが、のどかの温かいコミュニティのおかげで不安なく新しい生活を始められました。',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-nodoka-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            入居者様の声
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            実際にのどかで生活している方々からのメッセージ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-nodoka-orange text-sm" />
                ))}
              </div>
              
              <FaQuoteLeft className="text-nodoka-orange/30 text-2xl mb-4" />
              
              <p className="text-nodoka-dark/80 leading-relaxed mb-6">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-nodoka-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-nodoka-orange font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-nodoka-dark">
                    {testimonial.name}さん
                  </h4>
                  <p className="text-sm text-nodoka-dark/60">
                    {testimonial.age}歳・{testimonial.occupation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
