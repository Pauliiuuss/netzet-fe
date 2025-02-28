import Image from 'next/image'

export const Promise = () => {
  return (
    <section className="mx-6 my-20 flex justify-center lg:mx-0">
      <div className="from-pink-default via-purple-default to-blue-default relative inline-block rounded-[40px] bg-gradient-to-r p-[2px]">
        <div className="bg-pure-white flex max-w-[790px] flex-col items-center rounded-[40px]">
          <div className="flex flex-col gap-6 px-6 pt-10 pb-2 lg:px-[58px]">
            <p className="text-text-dark-green text-center text-[28px] font-bold lg:text-4xl">
              {'Our promise'}
            </p>
            <p className="text-text-dark-green leading-6 lg:text-xl">
              &#34;We know how you feel. You&#39;re constantly fighting
              procrastination, and{' '}
              <span className="font-extrabold">
                it seems like there&#39;s no way to win.
              </span>{' '}
              Sometimes you see a glimmer of hope, only to{' '}
              <span className="font-extrabold">
                fall back into the same old patterns.
              </span>
              <br />
              <br />
              At first you think that missing a deadline or an overdue bill is
              the worst that could happen. But then you realize that those are
              just the beginning.
              <br />
              <br />
              <span className="font-extrabold">
                Unsuccessful relationships, unrealized aspirations,
              </span>{' '}
              and <span className="font-extrabold">poor mental wellbeing</span>{' '}
              that seems to be spiraling out of control - these are the real
              consequences of procrastination.
              <br />
              <br />
              Having helped thousands of procrastinators we’ve learned that the
              procrastinator’s problems run deep and overcoming procrastination
              is not merely just a matter of &#34;getting your act together&#34;
              and &#34;sticking to it&#34;.
              <br />
              <br />
              <span className="font-extrabold">
                There’s a reason why you procrastinate, and understanding that
                reason is the key to success.
              </span>
              <br />
              <br />
              That&#39;s why there&#39;s no one-size-fits-all solution to
              procrastination. You need to find the right strategy for you - and
              that&#39;s where we come in.
              <br />
              <br />
              Together,{' '}
              <span className="font-extrabold">
                we&#39;ll help you find the root cause of your procrastination
              </span>{' '}
              and design a personalized plan to overcome it based on the latest
              psychological research.
              <br />
              <br />
              We have helped countless people to feel more in control, more
              productive, and more confident and we know we can do the same for
              you!
            </p>
          </div>
          <Image
            src={'/promise/divider.svg'}
            alt="divider"
            width={0}
            height={0}
            className="h-full w-full"
          />
          <div className="flex max-w-[297px] flex-row items-center gap-8 pt-6 pb-10 lg:pt-0 lg:pb-[35px]">
            <Image
              src={'/promise/timothy.svg'}
              alt={'avatar'}
              width={94}
              height={94}
            />
            <div>
              <p className="text-text-dark-green text-sm leading-none">
                <span className="text-base font-bold italic">
                  Timothy Decker
                </span>
                <br />
                <br />
                Head of Science and Research at{' '}
                <span className="font-bold">ShiftMind</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
