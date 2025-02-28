import Image from 'next/image'

import { PlanCard } from '@/components/PlanCard'

import { planData } from '@/utils/planData'

export const Plan = () => {
  return (
    <section className="mt-[60px] mb-[120px] flex flex-col items-center justify-center gap-[60px] lg:-mt-[10%] lg:gap-20">
      <p className="text-text-dark-green max-w-[500px] text-center text-[32px] leading-none font-bold lg:text-[40px]">
        {'Your Procrastination plan will help you:'}
      </p>
      <div className="flex max-w-[964] flex-col-reverse items-center gap-[93px] lg:flex-row lg:items-stretch">
        <Image
          src={'/plan/brain.svg'}
          alt="brain"
          width={0}
          height={0}
          className="h-[215px] w-[250px] lg:h-[270px] lg:w-[310px]"
        />
        <div className="flex flex-row flex-wrap justify-center gap-[60px]">
          {planData.map((plan) => {
            return <PlanCard data={plan} key={plan.id} />
          })}
        </div>
      </div>
    </section>
  )
}
