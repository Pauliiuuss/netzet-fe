import classNames from 'classnames'
import Image from 'next/image'

import { Summary } from '@/utils/types'

export const SummaryCard = ({ data }: { data: Summary }) => {
  const stageColor = {
    'text-pink-default': data.stage === 'high',
    'text-blue-default': data.stage === 'moderate',
  }

  return (
    <div className="bg-dark-green text-pure-white flex max-w-[472px] flex-col gap-6 rounded-3xl px-10 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">{data.title}</p>
        <p className={classNames('text-xl font-extrabold', stageColor)}>
          {data.stage.toUpperCase()}
        </p>
        <p className="text-lg">{data.content}</p>
      </div>
      <Image
        alt="scale"
        src={`/${data.stage}.svg`}
        width={0}
        height={0}
        className="w-full"
      />
    </div>
  )
}
