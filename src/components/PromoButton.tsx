import Link from 'next/link'

import { scrollToElement } from '@/utils/functions'

export const PromoButton = ({ content }: { content: string }) => {
  return (
    <Link
      href={'pricing'}
      onClick={(e) => {
        scrollToElement(e, 'pricing')
      }}
    >
      <button className="border-blue-border shadow-blue-border from-pink-default via-lilac-default to-blue-default h-12 w-full min-w-36 rounded-[8px] bg-gradient-to-r text-sm font-semibold hover:border-2 hover:shadow-[0px_0px_10px] lg:w-[240px]">
        {content}
      </button>
    </Link>
  )
}
