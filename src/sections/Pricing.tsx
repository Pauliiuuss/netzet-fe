'use client'

import Image from 'next/image'
import { useState } from 'react'

import { CheckoutModal } from '@/components/CheckoutModal'
import { PricingButton } from '@/components/PricingButton'
import { PricingCard } from '@/components/PricingCard'

import { findPricingPlanById } from '@/utils/functions'
import { pricingData } from '@/utils/pricingData'
import {
  setSelectedPricingId,
  useSelectedPricingId,
} from '@/utils/pricingStore'

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const selectedPricingId = useSelectedPricingId()

  const selectedPricing = findPricingPlanById({ id: selectedPricingId })

  return (
    <section id="pricing">
      <Image
        src="/price-wave-top.svg"
        alt="wave-top"
        width={0}
        height={0}
        className="-mb-[1px] w-full"
      />
      <div className="bg-pricing-green text-pure-white flex flex-col items-center justify-center px-6 py-10 lg:px-0">
        <p className="text-4xl font-bold">{'Choose your plan'}</p>
        <div className="my-14 flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-end">
          {pricingData.map((data) => {
            return (
              <PricingCard
                data={data}
                onSelect={() => {
                  setSelectedPricingId(data.id)
                }}
                selected={data.id === selectedPricingId}
                key={data.id}
              />
            )
          })}
        </div>
        <p className="text-center text-sm">
          {
            'By selecting a payment method, you agree to the Terms & Conditions and Privacy Policy.'
          }
        </p>
        <PricingButton
          content="GET MY PLAN"
          onClick={() => {
            setIsModalOpen(true)
          }}
        />
        <p className="max-w-[672px] text-center text-xs">
          {`You are enrolling in ${selectedPricing?.durationInMonths} Month Plan subscription to`}
          <br />{' '}
          {`https://shiftmind.app/ service with the discount price $${selectedPricing?.pricePerMonth}. You agree that the plan you selected will automatically be extended at the full price for successive renewal periods and you will be charged $${selectedPricing?.previousPerMonth} every ${selectedPricing?.durationInMonths} months until you cancel the subscription. Payments will be charged from the card you specified here. You can cancel your subscription by contacting our customer support team via email at hello@shiftmind.app. Terms of Service the charge will appear on your bill as “ShiftMind”.`}
        </p>
        <div className="mt-8 flex w-full max-w-[672px] flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <div className="flex max-w-[371px] flex-row items-center">
            <Image
              src={'/guarantee.svg'}
              alt="guarantee"
              width={52}
              height={52}
            />
            <div className="text-pure-white pl-4 leading-none">
              <span className="text-xl leading-none font-extrabold">
                RISK-FREE GUARANTEE
              </span>{' '}
              <span className="text-sm">
                cancel at any time without being charged the full price
              </span>
            </div>
          </div>
          <Image
            src={'/payment-methods.svg'}
            alt="paymentMethods"
            width={261}
            height={38}
          />
        </div>
      </div>
      <Image
        src="/price-wave-bottom.svg"
        alt="wave-bottom"
        width={0}
        height={0}
        className="-mt-[1px] w-full"
      />
      {selectedPricing && (
        <CheckoutModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
          }}
          selectedPricing={selectedPricing}
        />
      )}
    </section>
  )
}
