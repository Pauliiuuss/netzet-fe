import Image from 'next/image'

export const Statistics = () => {
  return (
    <section className="w-full">
      <Image
        src="/stats/stats.png"
        alt="stats"
        width={2800}
        height={2300}
        className="hidden h-auto w-full lg:block"
      />
      <Image
        src="/stats/stats-mobile.png"
        alt="stats"
        width={1000}
        height={1000}
        className="block h-auto w-full lg:hidden"
      />
    </section>
  )
}
