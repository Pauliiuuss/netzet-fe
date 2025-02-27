import Image from 'next/image'

import { PricingButton } from '@/components/PricingButton'
import { PricingCard } from '@/components/PricingCard'

import { pricingData } from '@/utils/pricingData'

export const Pricing = () => {
  return (
    <section className="mt-14">
      <Image
        src="/price-wave-top.svg"
        alt="wave-top"
        width={0}
        height={0}
        className="w-full"
      />
      <div className="bg-pricing-green text-pure-white flex flex-col items-center justify-center py-10">
        <p className="text-4xl font-bold">{'Choose your plan'}</p>
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <PricingCard data={pricingData[0]} />
        </div>
        <p className="text-sm">
          {
            'By selecting a payment method, you agree to the Terms & Conditions and Privacy Policy.'
          }
        </p>
        <PricingButton content="GET MY PLAN" />
        <p className="max-w-[672px] text-center text-xs">
          {'You are enrolling in 1 Month Plan subscription to'}
          <br />{' '}
          {
            'https://shiftmind.app/ service with the discount price $29.99. You agree that the plan you selected will automatically be extended at the full price for successive renewal periods and you will be charged $59.98 every 1 months until you cancel the subscription. Payments will be charged from the card you specified here. You can cancel your subscription by contacting our customer support team via email at hello@shiftmind.app. Terms of Service the charge will appear on your bill as “ShiftMind”.'
          }
        </p>
        <div>
          <p></p>
          <div></div>
        </div>
      </div>
      <Image
        src="/price-wave-bottom.svg"
        alt="wave-bottom"
        width={0}
        height={0}
        className="h-full w-full"
      />
    </section>
  )
}
