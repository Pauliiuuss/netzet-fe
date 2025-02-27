import { PromotionBar } from '@/components/PromotionBar'

import { Header } from '@/sections/Header'
import { Pricing } from '@/sections/Pricing'
import { Summary } from '@/sections/Summary'

export default function Home() {
  return (
    <div className="from-white-gradient to-gray-gradient bg-gradient-to-r">
      <PromotionBar />
      <Header />
      <Summary />
      <Pricing />
    </div>
  )
}
