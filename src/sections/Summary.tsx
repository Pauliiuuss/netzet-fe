import Image from 'next/image'

import { SummaryCard } from '@/components/SummaryCard'

import { summaryData } from '@/utils/summaryData'

export const Summary = () => {
  return (
    <section className="mt-10 flex max-w-[960px] flex-col items-center self-center">
      <p className="text-dark-green mb-10 max-w-[560px] text-center text-[40px] font-bold">
        {'Your Personal Procrastination Summary'}
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {summaryData.map((data) => {
          return <SummaryCard key={data.title} data={data} />
        })}
      </div>
      <div className="bg-dark-green mt-6 h-full max-h-[440px] w-full max-w-[640px] rounded-3xl p-10">
        <Image
          src="/graph.svg"
          alt="graph"
          width={0}
          height={0}
          className="h-full w-full"
        />
      </div>
    </section>
  )
}
