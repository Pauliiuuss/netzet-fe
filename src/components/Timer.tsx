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
          <div className="bg-light-green flex h-12 w-12 flex-col items-center justify-center rounded-[4px]">
            <p className="text-xl leading-none font-bold">{days}</p>
            <p className="text-xs leading-none">{'d'}</p>
          </div>
          <p>{':'}</p>
        </>
      )}
      {hours > 0 && (
        <>
          <div className="bg-light-green flex h-12 w-12 flex-col items-center justify-center rounded-[4px]">
            <p className="text-xl leading-none font-bold">{hours}</p>
            <p className="text-xs leading-none">{'hr'}</p>
          </div>
          <p>{':'}</p>
        </>
      )}
      <>
        <div className="bg-light-green flex h-12 w-12 flex-col items-center justify-center rounded-[4px]">
          <p className="text-xl leading-none font-bold">{minutes}</p>
          <p className="text-xs leading-none">{'min'}</p>
        </div>
        <p>{':'}</p>
      </>
      <>
        <div className="bg-light-green flex h-12 w-12 flex-col items-center justify-center rounded-[4px]">
          <p className="text-xl leading-none font-bold">{seconds}</p>
          <p className="text-xs leading-none">{'sec'}</p>
        </div>
      </>
    </div>
  )
}
