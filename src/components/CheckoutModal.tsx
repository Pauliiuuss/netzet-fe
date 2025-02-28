'use client'

import Image from 'next/image'
import React from 'react'

import { PricingPlan } from '@/utils/types'

export const CheckoutModal = ({
  isOpen,
  onClose,
  selectedPricing,
}: {
  isOpen: boolean
  onClose: () => void
  selectedPricing: PricingPlan
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="bg-seethrough-black fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative h-svh w-full bg-white p-6 shadow-lg lg:h-auto lg:max-w-lg lg:rounded-lg">
        <div className="flex flex-col items-center">
          <button
            className="self-end text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <Image
              src={'/icons/close.svg'}
              alt="close"
              width={20}
              height={20}
            />
          </button>
          {/* Order Summary */}
          <div className="text-text-dark-green flex w-full flex-col gap-4">
            <p className="text-xl font-semibold">{'Order Summary'}</p>
            <div className="border-light-gray flex flex-col gap-4 rounded-2xl border-1 p-4">
              <div className="flex flex-row justify-between">
                <p className="text-sm">{'Monthly Plan'}</p>
                <p>{`$${selectedPricing.pricePerMonth}`}</p>
              </div>
              <span className="border-light-gray w-full border-b-1" />
              <div className="flex flex-row justify-between">
                <p className="text-pink-default text-sm">{'Discount (50%)'}</p>
                <p>{`-$${selectedPricing.pricePerMonth}`}</p>
              </div>
              <span className="border-light-gray w-full border-b-1" />
              <div className="flex flex-row justify-between">
                <p className="font-semibold">{'Total'}</p>
                <p>{`$${selectedPricing.pricePerMonth}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
