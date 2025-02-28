import Image from 'next/image'

import { GoalCard } from '@/components/GoalCard'

import { goalsData } from '@/utils/goalsData'

export const Goals = () => {
  return (
    <section className="my-[60px] flex flex-col items-center justify-center gap-6 px-7 lg:my-24 lg:flex-row lg:gap-9 lg:px-0">
      <GoalCard data={goalsData[0]} />
      <Image
        src={'/divider.svg'}
        alt="divider"
        width={0}
        height={0}
        className="h-14 w-12 rotate-90 lg:h-[82px] lg:w-[76px] lg:rotate-0"
      />
      <GoalCard data={goalsData[1]} />
    </section>
  )
}
