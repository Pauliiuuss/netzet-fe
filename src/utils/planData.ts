import { Plan } from './types'

export const planData: Plan[] = [
  {
    id: '1',
    icon: '/icons/note.svg',
    wide: false,
    textSegments: [
      {
        text: 'Keep your',
        highlighted: false,
      },
      {
        text: 'motivation up',
        highlighted: true,
      },
      {
        text: 'by having daily reports of your progress and achievements',
        highlighted: false,
      },
    ],
  },
  {
    id: '2',
    icon: '/icons/clock.svg',
    wide: true,
    textSegments: [
      {
        text: 'Learn new techniques to improve your',
        highlighted: false,
      },
      {
        text: 'concentration, effectively handle time,',
        highlighted: true,
      },
      {
        text: 'and establish ',
        highlighted: false,
      },
      {
        text: 'positive daily routines.',
        highlighted: true,
      },
    ],
  },
  {
    id: '3',
    icon: '/icons/book.svg',
    wide: false,
    textSegments: [
      {
        text: 'Build',
        highlighted: false,
      },
      {
        text: 'new habits',
        highlighted: true,
      },
      {
        text: 'with our prepared guides',
        highlighted: false,
      },
    ],
  },
  {
    id: '4',
    icon: '/icons/clip.svg',
    wide: true,
    textSegments: [
      {
        text: 'Have an action plan to',
        highlighted: false,
      },
      {
        text: 'break your procrastination cycle',
        highlighted: true,
      },
      {
        text: 'and manage procrastination',
        highlighted: false,
      },
    ],
  },
]
