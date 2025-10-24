'use client'

import { FaEnvelope, FaPhone, FaLine, FaHome, FaFileAlt, FaCheckCircle, FaHandshake, FaKey } from 'react-icons/fa'

const StepDetails = () => {
  const stepDetails = [
    {
      step: '01',
      icon: FaEnvelope,
      title: '問い合わせ',
      subtitle: 'Contact',
      description: [
        'まずは電話、LINE、メールにてお問い合わせください。',
        'シェアハウスの簡単な概要をお伝えし、見学にお越しいただく日程をご案内いたします。'
      ],
      contactMethods: [
        {
          type: 'phone',
          icon: FaPhone,
          title: 'お電話はこちら',
          detail: '078-381-8061',
          subDetail: '受付:月曜~金曜/10:00~17:00',
          color: 'border-blue-500',
          bgColor: 'bg-blue-500',
        },
        {
          type: 'line',
          icon: FaLine,
          title: 'LINEで問い合わせ',
          color: 'border-green-500',
          bgColor: 'bg-green-500',
        },
        {
          type: 'email',
          icon: FaEnvelope,
          title: 'Webフォームで',
          subTitle: 'お問い合わせ',
          color: 'border-teal-500',
          bgColor: 'bg-teal-500',
        },
      ],
    },
    {
      step: '02',
      icon: FaHome,
      title: '部屋見学',
      subtitle: 'Tour',
      description: [
        'あらかじめご予約いただいた日程にシェアハウスまでお越しいただき、お部屋をご案内させていただきます。'
      ],
      images: [
        { src: '/images/tour1.jpg', alt: 'リビングルーム' },
        { src: '/images/tour2.jpg', alt: 'キッチン' },
      ],
    },
    {
      step: '03',
      icon: FaFileAlt,
      title: '申し込み',
      subtitle: 'Register',
      description: [
        '申込書に入居日など必要事項をご記入の上、',
        '写真付き身分証明書を添付してお申し込みください。'
      ],
      documents: {
        japanese: [
          { name: '運転免許証', english: 'Drivers Licence of Japan' },
          { name: 'マイナンバーカード', english: 'My Number Card' },
        ],
        foreign: [
          { name: 'パスポート', english: 'Passport' },
          { name: '在留カード または有効なビザ', english: 'Residence Card or Valid Visa' },
        ],
      },
    },
    {
      step: '04',
      icon: FaCheckCircle,
      title: '入居審査',
      subtitle: 'Screening',
      description: [
        'お申し込み後2~5日で審査を通った方にのみご連絡をさせていただきます。',
        '入居審査基準は公表致しておりませんので、あらかじめご了承いただきますようお願い申し上げます。'
      ],
      restrictions: [
        '40歳以上の方',
        '入居のご希望期間が6ヶ月未満の方',
      ],
    },
    {
      step: '05',
      icon: FaHandshake,
      title: '契約',
      subtitle: 'Contract',
      description: [
        '契約書をご用意いたしますので、必要事項にご記入・ご捺印の上、郵送または弊社事務所までお持ちください。また、お支払い期日までに初期費用をご指定させていただく口座にご入金いただきますようお願い申し上げます。'
      ],
      address: {
        title: '郵送またはご持参いただく場合',
        postalCode: '〒654-0001',
        address: '兵庫県神戸市須磨区禅昌寺町1丁目27-5',
        company: 'シェアハウス のどか',
      },
    },
    {
      step: '06',
      icon: FaKey,
      title: '入居',
      subtitle: 'Move in',
      description: [
        '入居のご案内を担当者からお知らせいたします。'
      ],
      moveOut: {
        title: '退去される場合のお手続きについて',
        description: '退去される場合は、退去希望日の1ヶ月前までに、退去通知書をメールまたは郵送にてお送りください。',
      },
    },
  ]

  return (
    <section className="py-20 bg-nodoka-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {stepDetails.map((step, index) => (
          <div
            key={step.step}
            className="mb-20 last:mb-0"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Step Header */}
              <div className="flex items-center mb-8">
                <step.icon className="text-nodoka-orange text-2xl mr-4" />
                <div>
                  <div className="flex items-baseline">
                    <span className="text-sm font-bold text-nodoka-dark">STEP</span>
                    <span className="text-3xl font-bold text-nodoka-dark ml-2">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-nodoka-dark">{step.title}</h3>
                  <p className="text-lg text-nodoka-dark/70">{step.subtitle}</p>
                  <div className="w-16 h-1 bg-nodoka-orange mt-2"></div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                {step.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-nodoka-dark/80 mb-2">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Step-specific content */}
              {step.step === '01' && step.contactMethods && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {step.contactMethods.map((method, methodIndex) => (
                    <div key={methodIndex} className={`border-2 ${method.color} rounded-xl p-6 ${method.bgColor} text-white`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <method.icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold">{method.title}</h4>
                          {method.subTitle && <h5 className="font-bold">{method.subTitle}</h5>}
                        </div>
                      </div>
                      {method.detail && (
                        <p className="text-2xl font-bold mb-2">{method.detail}</p>
                      )}
                      {method.subDetail && (
                        <p className="text-sm opacity-90">{method.subDetail}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {step.step === '02' && step.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {step.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="aspect-video bg-nodoka-gray rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=${encodeURIComponent(image.alt)}`
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {step.step === '03' && step.documents && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Japanese Documents */}
                  <div>
                    <div className="bg-nodoka-orange text-white px-4 py-2 rounded-t-lg">
                      <h4 className="font-bold">必要書類 (日本人)</h4>
                    </div>
                    <div className="border border-nodoka-orange rounded-b-lg p-6">
                      <div className="flex items-center justify-center space-x-8">
                        <div className="text-center">
                          <div className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mb-2">
                            <FaFileAlt className="text-gray-400 text-2xl" />
                          </div>
                          <p className="font-semibold text-nodoka-dark">運転免許証</p>
                          <p className="text-sm text-nodoka-dark/70">Drivers Licence of Japan</p>
                        </div>
                        <span className="text-gray-400 font-bold">OR</span>
                        <div className="text-center">
                          <div className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mb-2">
                            <FaFileAlt className="text-gray-400 text-2xl" />
                          </div>
                          <p className="font-semibold text-nodoka-dark">マイナンバーカード</p>
                          <p className="text-sm text-nodoka-dark/70">My Number Card</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Foreign Documents */}
                  <div>
                    <div className="bg-nodoka-orange text-white px-4 py-2 rounded-t-lg">
                      <h4 className="font-bold">必要書類 (外国籍の方)</h4>
                    </div>
                    <div className="border border-nodoka-orange rounded-b-lg p-6">
                      <div className="flex items-center justify-center space-x-8">
                        <div className="text-center">
                          <div className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mb-2">
                            <FaFileAlt className="text-gray-400 text-2xl" />
                          </div>
                          <p className="font-semibold text-nodoka-dark">パスポート</p>
                          <p className="text-sm text-nodoka-dark/70">Passport</p>
                        </div>
                        <span className="text-gray-400 font-bold">AND</span>
                        <div className="text-center">
                          <div className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mb-2">
                            <FaFileAlt className="text-gray-400 text-2xl" />
                          </div>
                          <p className="font-semibold text-nodoka-dark">在留カード または有効なビザ</p>
                          <p className="text-sm text-nodoka-dark/70">Residence Card or Valid Visa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step.step === '04' && step.restrictions && (
                <div className="border border-nodoka-orange rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-nodoka-dark mb-2">
                        当社が運営するシェアハウスでは、国籍と性別による入居制限は特に設けておりません。
                      </h4>
                      <p className="text-nodoka-dark/80 mb-4">
                        ただし、下記に該当される方はご入居の対象外とさせていただきますので、あらかじめご了承いただきますようお願い申し上げます。
                      </p>
                      <ul className="space-y-2">
                        {step.restrictions.map((restriction, restrictionIndex) => (
                          <li key={restrictionIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-nodoka-orange rounded-full mr-3"></div>
                            <span className="text-nodoka-dark/80">{restriction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {step.step === '05' && step.address && (
                <div className="border border-nodoka-orange rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-nodoka-orange rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-nodoka-dark mb-2">{step.address.title}</h4>
                      <p className="text-lg font-semibold text-nodoka-dark">{step.address.postalCode}</p>
                      <p className="text-nodoka-dark/80 mb-2">{step.address.address}</p>
                      <p className="text-nodoka-dark/80">{step.address.company}</p>
                    </div>
                  </div>
                </div>
              )}

              {step.step === '06' && step.moveOut && (
                <div className="border border-nodoka-orange rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-nodoka-dark mb-2">{step.moveOut.title}</h4>
                      <p className="text-nodoka-dark/80">{step.moveOut.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StepDetails
