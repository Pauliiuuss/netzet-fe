import classNames from 'classnames'
import Image from 'next/image'

import { Plan } from '@/utils/types'

export const PlanCard = ({ data }: { data: Plan }) => {
  const cardWidth = {
    'max-w-[342px] lg:max-w-[290px]': data.wide,
    'max-w-[342px] lg:max-w-[210px]': !data.wide,
  }
  return (
    <div className={classNames('flex flex-row items-start gap-4', cardWidth)}>
      <Image src={data.icon} alt={data.icon} height={48} width={48} />
      <div className="flex flex-row flex-wrap gap-1">
        <p className="leading-none">
          {data.textSegments.map((segment) => {
            const highlighted = segment.highlighted ? 'font-bold' : ''

            return (
              <span
                key={segment.text}
                className={classNames('leading-none', highlighted)}
              >
                {segment.text}{' '}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
