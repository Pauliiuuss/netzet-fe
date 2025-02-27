import Image from 'next/image'

export const Header = () => {
  return (
    <section className="relative flex h-48">
      <div className="bg-header-green flex h-24 w-full items-center justify-center">
        <Image alt="logo" src={'/logo.svg'} height={52} width={110} />
      </div>
      <Image
        alt="bg-top"
        src={'/header-top.svg'}
        width={0}
        height={0}
        className="absolute -z-10 h-full w-full"
      />
    </section>
  )
}
