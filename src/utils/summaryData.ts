import { Summary } from './types'

export const summaryData: Summary[] = [
  {
    title: 'Physical symptoms:',
    stage: 'high',
    content: 'Can show up as feeling anxious, sad, or having big mood changes.',
  },
  {
    title: 'Psychological symptoms:',
    stage: 'moderate',
    content:
      'Like having trouble sleeping, feeling tired all the time, or pain without a clear reason.',
  },
  {
    title: 'Behavioral symptoms:',
    stage: 'moderate',
    content:
      // Double qoutes bcuz of apostrophe in the text. Eslint is angry.
      // eslint-disable-next-line
      "Might involve remembering bad things that happened, having bad dreams, or can\'t stop thinking about something bad.",
  },
  {
    title: 'Impact on your life:',
    stage: 'moderate',
    content:
      // Double qoutes bcuz of apostrophe in the text. Eslint is angry.
      // eslint-disable-next-line
      "Having trouble trusting others, worrying they'll leave you, or finding it hard to get close to people and set limits.",
  },
]
