'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import { FAQ } from '@/utils/types'

export const FAQItem = ({ data }: { data: FAQ }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const openColor = {
    'bg-gray-gradient': !isOpen,
    'bg-light-blue': isOpen,
  }

  return (
    <div
      className={classNames({
        'from-pink-default via-purple-default to-blue-default relative inline-block rounded-3xl bg-gradient-to-r p-[2px]':
          isOpen,
      })}
    >
      {isOpen && (
        <div className="from-pink-default via-purple-default to-blue-default absolute -inset-2 rounded-3xl bg-gradient-to-r opacity-40 blur" />
      )}
      <div
        className="bg-pure-white relative cursor-pointer self-center rounded-3xl px-6 py-7 lg:w-[964px]"
        onClick={handleOpen}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-dark-green w-fit leading-none font-medium">
            {data.question}
          </h3>
          <div
            className={classNames(
              'flex h-[24px] w-[24px] items-center justify-center rounded-lg',
              openColor
            )}
          >
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classNames({
                'text-pure-white mb-0.5 rotate-180 transition-transform duration-300':
                  isOpen,
              })}
            >
              <path
                d="M2.00003 1.90234L7.90411 7.90234L14 1.90234"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <p className="text-dark-green mt-6 text-sm font-medium">
            {data.answer}
          </p>
        )}
      </div>
    </div>
  )
}
