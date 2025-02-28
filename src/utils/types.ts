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

type Segments = {
  text: string
  highlighted: boolean
}

export type Plan = {
  id: string
  icon: string
  wide: boolean
  textSegments: Segments[]
}

export type Testimonial = {
  id: string
  icon: string
  name: string
  age: string
  location: string
  text: string
}
