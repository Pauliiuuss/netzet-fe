import { PromotionBar } from '@/components/PromotionBar'

import { FAQ } from '@/sections/FAQ'
import { Goals } from '@/sections/Goals'
import { Header } from '@/sections/Header'
import { Plan } from '@/sections/Plan'
import { Pricing } from '@/sections/Pricing'
import { Promise } from '@/sections/Promise'
import { Statistics } from '@/sections/Statistics'
import { Summary } from '@/sections/Summary'
import { Testimonials } from '@/sections/Testimonials'

export default function Home() {
  return (
    <div className="from-white-gradient to-gray-gradient relative flex flex-col bg-gradient-to-r">
      <PromotionBar />
      <Header />
      <Summary />
      <Pricing key={'1'} />
      <Goals />
      <Statistics />
      <Plan />
      <Testimonials />
      <Pricing key={'2'} />
      <Promise />
      <FAQ />
    </div>
  )
}
