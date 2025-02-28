import { TestimonialsCard } from '@/components/TestimonialsCard'

import { testimonialsData } from '@/utils/testimonialsData'

export const Testimonials = () => {
  return (
    <div className="mb-10 flex flex-col gap-10 px-5 lg:mb-20 lg:gap-20 lg:px-0">
      <p className="text-text-dark-green text-center text-[32px] font-bold lg:text-[40px]">
        {'People love our plan'}
      </p>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {testimonialsData.map((testimonial) => {
          return <TestimonialsCard data={testimonial} key={testimonial.id} />
        })}
      </div>
    </div>
  )
}
