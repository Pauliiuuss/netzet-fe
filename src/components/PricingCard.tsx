import classNames from 'classnames'

import { PricingPlan } from '@/utils/types'

export const PricingCard = ({
  data,
  selected,
}: {
  data: PricingPlan
  selected?: boolean
}) => {
  const topChoiceStyles = {
    'h-[134px] border-2 border-blue-border bg-pure-white': data.topChoice,
    'from-white-gradient to-gray-gradient bg-gradient-to-r': !data.topChoice,
  }

  return (
    <div
      className={classNames(
        'flex w-full max-w-[377px] flex-col items-center justify-end',
        data.topChoice &&
          'bg-blue-border shadow-blue-border h-[175px] rounded-3xl'
      )}
    >
      {data.topChoice && (
        <p className="text-sm leading-none font-bold">
          {'TOP CHOICE FOR BEGINNERS'}
        </p>
      )}
      <div
        className={classNames(
          'text-text-dark-green mt-3 flex h-[118px] w-full max-w-[377px] flex-row items-center justify-between rounded-3xl px-4 py-6',
          topChoiceStyles
        )}
      >
        <div className="flex flex-row gap-4">
          <div />
          <div className="flex flex-col gap-2">
            <p className="text-xl leading-none font-bold">{`${data.durationInMonths}-month plan`}</p>
            <p className="text-xs">{`Billed every ${data.durationInMonths} month`}</p>
            <div className="flex flex-row gap-0.5">
              <p className="text-pink-default text-xs line-through">{`USD ${data.previousPerMonth}`}</p>
              <p className="text-xs font-bold">{`USD ${data.pricePerMonth}`}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <p className="text-sm font-semibold">{'USD'}</p>
            <p className="text-[32px] leading-none font-bold">
              {data.pricePerDay}
            </p>
          </div>
          <p className="text-pink-default text-xs line-through">{`USD ${data.previousPerDay} per day`}</p>
        </div>
      </div>
    </div>
  )
}
