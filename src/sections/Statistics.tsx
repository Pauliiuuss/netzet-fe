import Image from 'next/image'

export const Statistics = () => {
  return (
    <div className="w-full">
      <Image
        src="/stats.png"
        alt="stats"
        width={2800}
        height={2300}
        className="hidden h-auto w-full lg:block"
      />
      <Image
        src="/stats-mobile.png"
        alt="stats"
        width={1000}
        height={1000}
        className="block h-auto w-full lg:hidden"
      />
    </div>
  )
}
