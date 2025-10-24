'use client'

import { FaEnvelope, FaHome, FaFileAlt, FaCheckCircle, FaHandshake, FaKey } from 'react-icons/fa'

const FlowSection = () => {
  const steps = [
    {
      number: '01',
      icon: FaEnvelope,
      title: '問い合わせ',
      subtitle: 'CONTACT',
    },
    {
      number: '02',
      icon: FaHome,
      title: '部屋見学',
      subtitle: 'TOUR',
    },
    {
      number: '03',
      icon: FaFileAlt,
      title: '申し込み',
      subtitle: 'REGISTER',
    },
    {
      number: '04',
      icon: FaCheckCircle,
      title: '入居審査',
      subtitle: 'SCREENING',
    },
    {
      number: '05',
      icon: FaHandshake,
      title: '契約',
      subtitle: 'CONTRACT',
    },
    {
      number: '06',
      icon: FaKey,
      title: '入居',
      subtitle: 'MOVE IN',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-2">FLOW</h2>
          <h3 className="text-3xl font-bold text-nodoka-dark mb-2">入居までの流れ</h3>
          <p className="text-lg text-nodoka-dark/70 mb-4">Move in / Move out</p>
          <div className="w-24 h-1 bg-nodoka-orange mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-center"
            >
              {/* Step Card */}
              <div className="w-48 h-48 border-2 border-nodoka-orange rounded-lg bg-white flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <step.icon className="text-nodoka-orange text-3xl mb-4" />
                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-sm font-bold text-nodoka-dark">STEP</span>
                    <span className="text-2xl font-bold text-nodoka-dark ml-1">{step.number}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-nodoka-dark mb-1">{step.title}</h4>
                  <p className="text-sm text-nodoka-dark/70">{step.subtitle}</p>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block mx-2">
                  <div className="w-0 h-0 border-l-[12px] border-l-nodoka-orange border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlowSection
