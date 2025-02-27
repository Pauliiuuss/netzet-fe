export type Summary = {
  title: string
  stage: 'high' | 'moderate'
  content: string
}

export type PricingPlan = {
  id: string
  durationInMonths: number
  pricePerDay: number
  pricePerMonth: number
  previousPerDay: number
  previousPerMonth: number
  topChoice: boolean
}

export type Goal = {
  image: string
  title: string
  points: string[]
  type: 'positive' | 'negative'
}
