import Image from 'next/image'

import { Testimonial } from '@/utils/types'

export const TestimonialsCard = ({ data }: { data: Testimonial }) => {
  return (
    <div className="from-pink-default via-purple-default to-blue-default relative inline-block rounded-3xl bg-gradient-to-r p-[1px]">
      <div className="from-pink-default via-purple-default to-blue-default absolute -inset-2 rounded-3xl bg-gradient-to-r opacity-25 blur" />

      <div className="bg-pure-white relative flex max-w-[472px] flex-col gap-6 rounded-3xl p-6">
        <div className="flex flex-row items-center gap-6">
          <Image src={data.icon} alt={data.name} width={86} height={86} />
          <div className="text-text-dark-green flex flex-col gap-1">
            <p className="leading-none font-extrabold">{`${data.name}., ${data.age}`}</p>
            <p className="font-figtree text-xs leading-4 font-normal whitespace-pre-line italic">
              {data.location}
            </p>
            <Image src={'/stars.svg'} alt="stars" width={86} height={14} />
          </div>
        </div>
        <p className="text-text-dark-green text-sm font-medium whitespace-pre-line">
          {data.text}
        </p>
      </div>
    </div>
  )
}
