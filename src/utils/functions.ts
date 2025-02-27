import { pricingData } from './pricingData'

export const findPricingPlanById = ({ id }: { id: string }) => {
  return pricingData.find((plan) => {
    return plan.id === id
  })
}
