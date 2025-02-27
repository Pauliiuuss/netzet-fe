import classNames from 'classnames'
import Image from 'next/image'

import { Goal } from '@/utils/types'

export const GoalCard = ({ data }: { data: Goal }) => {
  const goalColor = {
    'text-pink-default': data.type === 'negative',
    'text-purple-default': data.type === 'positive',
  }
  const markerColor = {
    'marker:text-pink-default': data.type === 'negative',
    'marker:text-purple-default': data.type === 'positive',
  }
  return (
    <div className="from-pink-default via-purple-default to-blue-default relative inline-block rounded-3xl bg-gradient-to-r p-[2px]">
      <div className="from-pink-default via-purple-default to-blue-default absolute -inset-2 rounded-3xl bg-gradient-to-r opacity-75 blur" />
      <div className="bg-pure-white relative flex w-[342px] flex-col justify-evenly rounded-3xl lg:w-[410px]">
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={600}
          className="w-full lg:h-[293px]"
        />
        <div className="lg:h-[293px]">
          <p className={classNames('p-6 text-2xl font-bold', goalColor)}>
            {data.title}
          </p>
          <ul
            className={classNames(
              'flex list-disc flex-col gap-4 pr-6 pb-6 pl-11 leading-none',
              markerColor
            )}
          >
            {data.points.map((pnt) => {
              return <li key={pnt}>{pnt}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
