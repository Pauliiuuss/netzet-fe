'use client'

import { PromoButton } from './PromoButton'
import { Timer } from './Timer'

export const PromotionBar = () => {
  const expirationDate = new Date(Date.now() + 864000)

  // Norint dienas prideti neskaiciuojant ms ---------
  // const promotionExpirationDate = new Date()
  // promotionExpirationDate.setDate(promotionExpirationDate.getDate() + 1)

  return (
    <div className="bg-dark-green text-pure-white flex h-20 w-full items-center justify-center gap-6 px-6 py-4 lg:gap-9 lg:p-0">
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
