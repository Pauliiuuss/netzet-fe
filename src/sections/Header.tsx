import Image from 'next/image'

export const Header = () => {
  return (
    <section>
      <div className="bg-header-green flex w-full items-center justify-center">
        <Image
          alt="logo"
          src={'/header/logo.svg'}
          height={52}
          width={110}
          className="py-4 lg:pt-10"
        />
      </div>
      <Image
        src="/header/header-bottom.svg"
        alt="header-bottom"
        width={0}
        height={0}
        className="-mt-[1px] w-full"
      />
    </section>
  )
}
