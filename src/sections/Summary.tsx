import Image from 'next/image'

import { SummaryCard } from '@/components/SummaryCard'

import { summaryData } from '@/utils/summaryData'

export const Summary = () => {
  return (
    <section className="mt-10 mb-14 flex max-w-[960px] flex-col items-center self-center px-6 lg:px-0">
      <p className="text-text-dark-green mb-10 max-w-[560px] text-center text-[32px] leading-none font-bold lg:text-[40px]">
        {'Your Personal Procrastination Summary'}
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {summaryData.map((data) => {
          return <SummaryCard key={data.title} data={data} />
        })}
      </div>
      <div className="from-pink-default via-lilac-default to-blue-default mt-6 inline-block rounded-3xl bg-gradient-to-r p-[1px]">
        <div className="bg-dark-green h-full max-h-[440px] w-full max-w-[640px] rounded-3xl px-4 py-10 lg:p-10">
          <Image
            src="/graph.svg"
            alt="graph"
            width={0}
            height={0}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
