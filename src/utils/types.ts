export type Summary = {
  title: string
  stage: 'high' | 'moderate'
  content: string
}

export type PricingPlan = {
  durationInMonths: number
  pricePerDay: number
  pricePerMonth: number
  previousPerDay: number
  previousPerMonth: number
  topChoice: boolean
}
