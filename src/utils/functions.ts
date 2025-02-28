import React from 'react'

import { pricingData } from './pricingData'

export const findPricingPlanById = ({ id }: { id: string }) => {
  return pricingData.find((plan) => {
    return plan.id === id
  })
}

export const scrollToElement = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  event.preventDefault()

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })

    window.history.pushState(null, '', window.location.pathname)
  }
}
