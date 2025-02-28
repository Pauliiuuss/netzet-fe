import { useEffect, useState } from 'react'

export const Timer = ({ expirationDate }: { expirationDate: Date }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const timeDifference = expirationDate.getTime() - currentTime.getTime()
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  return (
    <div className="flex items-center justify-center gap-1">
      {days > 0 && (
        <>
          <div className="bg-light-green flex h-10 w-10 flex-col items-center justify-center rounded-[4px] lg:h-12 lg:w-12">
            <p className="text-base leading-none font-bold lg:text-xl">
              {days}
            </p>
            <p className="text-xs leading-none">{'d'}</p>
          </div>
          <p>{':'}</p>
        </>
      )}
      {hours > 0 && (
        <>
          <div className="bg-light-green flex h-10 w-10 flex-col items-center justify-center rounded-[4px] lg:h-12 lg:w-12">
            <p className="text-base leading-none font-bold lg:text-xl">
              {hours}
            </p>
            <p className="text-xs leading-none">{'hr'}</p>
          </div>
          <p>{':'}</p>
        </>
      )}
      <>
        <div className="bg-light-green flex h-10 w-10 flex-col items-center justify-center rounded-[4px] lg:h-12 lg:w-12">
          <p className="text-base leading-none font-bold lg:text-xl">
            {minutes}
          </p>
          <p className="text-xs leading-none">{'min'}</p>
        </div>
        <p>{':'}</p>
      </>
      <>
        <div className="bg-light-green flex h-10 w-10 flex-col items-center justify-center rounded-[4px] lg:h-12 lg:w-12">
          <p className="text-base leading-none font-bold lg:text-xl">
            {seconds}
          </p>
          <p className="text-xs leading-none">{'sec'}</p>
        </div>
      </>
    </div>
  )
}
