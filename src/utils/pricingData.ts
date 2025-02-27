import { PricingPlan } from './types'

export const pricingData: PricingPlan[] = [
  {
    id: '1',
    durationInMonths: 3,
    pricePerDay: 0.69,
    pricePerMonth: 62.99,
    previousPerDay: 1.38,
    previousPerMonth: 125.98,
    topChoice: false,
  },
  {
    id: '2',
    durationInMonths: 1,
    pricePerDay: 0.99,
    pricePerMonth: 29.99,
    previousPerDay: 1.98,
    previousPerMonth: 59.98,
    topChoice: true,
  },
  {
    id: '3',
    durationInMonths: 6,
    pricePerDay: 0.49,
    pricePerMonth: 89.99,
    previousPerDay: 0.98,
    previousPerMonth: 179.98,
    topChoice: false,
  },
]
