'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import AnimatedTitle from '../AnimatedTitle'

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      category: '入居について',
      questions: [
        {
          question: '入居条件はありますか？',
          answer: '18歳以上40歳未満の方で、入居期間が6ヶ月以上の方にご入居いただけます。国籍や性別による制限はありません。',
        },
        {
          question: '入居審査はどのような基準で行われますか？',
          answer: '入居審査基準は公表しておりませんが、申し込み後2〜5日で結果をお知らせいたします。',
        },
        {
          question: '見学は可能ですか？',
          answer: 'はい、事前にご予約いただければ見学可能です。お電話、LINE、メールにてお問い合わせください。',
        },
        {
          question: '最短いつから入居できますか？',
          answer: '申し込みから審査、契約手続きを経て、最短で1週間程度での入居が可能です。',
        },
      ],
    },
    {
      category: '料金について',
      questions: [
        {
          question: '家賃はいくらですか？',
          answer: '家賃は部屋のタイプによって異なります。詳細はお問い合わせください。',
        },
        {
          question: '初期費用はいくらかかりますか？',
          answer: '初期費用には敷金、礼金、仲介手数料、火災保険料などが含まれます。詳細はお問い合わせください。',
        },
        {
          question: '光熱費は別途かかりますか？',
          answer: '光熱費（電気・ガス・水道）は別途実費でご負担いただきます。',
        },
        {
          question: '支払い方法は？',
          answer: '家賃は銀行振込でのお支払いとなります。支払い日は毎月25日です。',
        },
      ],
    },
    {
      category: '設備・サービスについて',
      questions: [
        {
          question: 'Wi-Fiはありますか？',
          answer: 'はい、高速Wi-Fiが完備されており、無料でご利用いただけます。',
        },
        {
          question: '洗濯機はありますか？',
          answer: '共用の洗濯機・乾燥機をご利用いただけます。',
        },
        {
          question: '駐車場はありますか？',
          answer: '駐車場のご用意はございません。近隣のコインパーキングをご利用ください。',
        },
        {
          question: 'ペットは飼えますか？',
          answer: '申し訳ございませんが、ペットの飼育はお断りしております。',
        },
      ],
    },
    {
      category: '生活について',
      questions: [
        {
          question: 'ルームメイトは何人ですか？',
          answer: 'シェアハウスの規模により異なりますが、おおむね4〜8名程度の方が共同生活をされています。',
        },
        {
          question: '門限はありますか？',
          answer: '門限は設けておりませんが、他の入居者の方への配慮をお願いしております。',
        },
        {
          question: '友達を泊めることはできますか？',
          answer: '事前にご連絡いただければ、短期間の宿泊は可能です。詳細は入居時にご説明いたします。',
        },
        {
          question: 'イベントはありますか？',
          answer: '定期的に交流会やイベントを開催しており、入居者同士の交流を深めていただけます。',
        },
      ],
    },
    {
      category: '退去について',
      questions: [
        {
          question: '退去の手続きはどうすればいいですか？',
          answer: '退去希望日の1ヶ月前までに退去通知書をメールまたは郵送にてお送りください。',
        },
        {
          question: '敷金は返還されますか？',
          answer: '原状回復費用を差し引いて敷金をお返しいたします。',
        },
        {
          question: '中途解約は可能ですか？',
          answer: '契約期間内の中途解約も可能ですが、解約料が発生する場合があります。',
        },
      ],
    },
  ]

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-nodoka-gray rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-nodoka-dark mb-6 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemId = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(itemId)
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-nodoka-orange/5 transition-colors duration-300"
                      >
                        <span className="font-semibold text-nodoka-dark pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="text-nodoka-orange flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-nodoka-orange flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <div className="border-t border-nodoka-gray pt-4">
                            <p className="text-nodoka-dark/80 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-nodoka-orange/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nodoka-dark mb-4">
              他にご質問がございましたら
            </h3>
            <p className="text-nodoka-dark/80 mb-6">
              上記にないご質問や詳細についてお聞きになりたいことがございましたら、
              お気軽にお問い合わせください。
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

export default FAQSection
