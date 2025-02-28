import Image from 'next/image'

import { FAQItem } from '@/components/FAQItem'

import { FAQData } from '@/utils/FAQData'

export const FAQ = () => {
  return (
    <section>
      <Image
        src="/faq/faq-top.svg"
        alt="faq-top"
        width={0}
        height={0}
        className="-mb-[1px] w-full"
      />
      <div className="bg-header-green flex flex-col items-center justify-center gap-6 px-6 pb-10 lg:pb-20">
        <p className="text-pure-white text-[40px] font-bold">
          {'People often ask'}
        </p>
        <div className="flex flex-col gap-2">
          {FAQData.map((faq) => {
            return <FAQItem data={faq} key={faq.id} />
          })}
        </div>
      </div>
    </section>
  )
}
