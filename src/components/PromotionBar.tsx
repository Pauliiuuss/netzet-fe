'use client'

import { PromoButton } from './PromoButton'
import { Timer } from './Timer'

export const PromotionBar = () => {
  // Adjust offer timer by ms ---------
  const expirationDate = new Date(Date.now() + 600000)

  // Adjust offer timer by days ---------
  // const promotionExpirationDate = new Date()
  // promotionExpirationDate.setDate(promotionExpirationDate.getDate() + 1)

  return (
    <div className="bg-dark-green text-pure-white sticky top-0 z-[420] flex h-20 w-full items-center justify-center gap-6 px-6 py-4 lg:gap-9 lg:p-0">
      <div className="flex items-center gap-2 lg:gap-4">
        <p className="text-base leading-none font-light lg:text-lg lg:font-medium">
          {'This offer expires in'}
        </p>
        <Timer expirationDate={expirationDate} />
      </div>
      <PromoButton content="GET MY PLAN" />
    </div>
  )
}
